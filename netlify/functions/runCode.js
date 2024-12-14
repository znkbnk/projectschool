// netlify/functions/runCode.js

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Babel = require("@babel/standalone");

exports.handler = async function(event, context) {
  const { userCode, testCases } = JSON.parse(event.body);

  // Forbidden code check
  const forbiddenCodeRegex = new RegExp(
    [
      /eval/,
      /setTimeout/,
      /setInterval/,
      /window\./,
      /document\./,
      /localStorage/,
      /sessionStorage/,
      /navigator\./,
      /screen\./,
      /geolocation\./,
      /console\./,
      /parent\./,
      /self\./,
      /location\./,
      /document\.body/,
      /document\.write/,
      /Function\./,
      /constructor/,
      /XMLHttpRequest/,
      /fetch/,
      /dangerouslySetInnerHTML/,
      /document\.createElement/,
      /document\.getElementById/,
      /document\.querySelector/,
      /document\.createTextNode/,
      /document\.appendChild/,
      /alert/,
    ]
      .map((regex) => regex.source)
      .join("|")
  );

  const match = userCode.match(forbiddenCodeRegex);
  if (match) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `Forbidden code detected: '${match[0]}'.`,
      }),
    };
  }

  try {
    // Transpile the user's code with Babel
    const transpiledCode = Babel.transform(userCode, {
      presets: ["react", "env"],
    }).code;

    const functionRegex = /(?:const|function|class)\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/;
    const matchFunc = userCode.match(functionRegex);

    if (!matchFunc) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Could not detect a valid function or component in your code.",
        }),
      };
    }

    const detectedFunctionName = matchFunc[1];

    // Run the transpiled code and execute the detected function
    const func = new Function(transpiledCode);
    const result = func();

    let allTestsPassed = true;
    let failedTestDetails = [];

    testCases.forEach(({ inputs, expectedOutput }, index) => {
      const testResult = result(...inputs);

      // Check if result matches expected output
      if (JSON.stringify(testResult) !== JSON.stringify(expectedOutput)) {
        allTestsPassed = false;
        failedTestDetails.push({
          testCaseIndex: index + 1,
          inputs,
          expectedOutput,
          result: testResult,
        });
      }
    });

    if (allTestsPassed) {
      return {
        statusCode: 200,
        body: JSON.stringify({ feedback: "✅ Correct! All test cases passed." }),
      };
    } else {
      let errorMessages = "❌ Some test cases failed. Try again!\n\n";
      failedTestDetails.forEach((testDetail) => {
        errorMessages += `Test Case ${testDetail.testCaseIndex} failed:\n`;
        errorMessages += `Inputs: ${JSON.stringify(testDetail.inputs)}\n`;
        errorMessages += `Expected Output: ${testDetail.expectedOutput}\n`;
        errorMessages += `Actual Output: ${testDetail.result}\n\n`;
      });

      return {
        statusCode: 400,
        body: JSON.stringify({ feedback: errorMessages }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `❌ Error: ${error.message}` }),
    };
  }
};
