const vm = require("vm");

exports.handler = async (event) => {
  const { code, testCases } = JSON.parse(event.body);

  // Validate input (e.g., limit code size, remove malicious patterns)
  const forbiddenPatterns = /eval|setTimeout|setInterval|require|process|global/;
  if (forbiddenPatterns.test(code)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        feedback: "❌ Forbidden patterns detected in your code.",
      }),
    };
  }

  try {
    const sandbox = {};
    const context = vm.createContext(sandbox);

    // Wrap code in a function for testing
    const func = new vm.Script(`${code}; module.exports = userFunction;`);
    const result = func.runInContext(context);

    const results = testCases.map(({ inputs, expectedOutput }) => {
      const testResult = result(...inputs);
      return {
        passed: JSON.stringify(testResult) === JSON.stringify(expectedOutput),
        inputs,
        result: testResult,
        expectedOutput,
      };
    });

    const allPassed = results.every((test) => test.passed);

    return {
      statusCode: 200,
      body: JSON.stringify({
        feedback: allPassed
          ? "✅ Correct! All test cases passed."
          : `❌ Some test cases failed:\n${results
              .filter((test) => !test.passed)
              .map(
                (test) =>
                  `Inputs: ${JSON.stringify(test.inputs)}, Expected: ${
                    test.expectedOutput
                  }, Got: ${test.result}`
              )
              .join("\n")}`,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        feedback: `❌ Error executing code: ${err.message}`,
      }),
    };
  }
};
