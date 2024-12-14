const vm = require("vm");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

exports.handler = async (event) => {
  const allowedOrigins = ['http://localhost:3000', 'https://projectschool.dev'];

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigins.join(', '),  // Allow specific origins
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',  // Allow methods
    'Access-Control-Allow-Headers': 'Content-Type',  // Allow specific headers
  };

  // Handle preflight request (CORS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  console.log("Event body:", event.body);  // Log the event body for debugging

  if (!event.body) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        feedback: "❌ No data provided in the request body.",
      }),
    };
  }

  let parsedBody;
  try {
    parsedBody = JSON.parse(event.body);
  } catch (error) {
    console.log("Error parsing JSON:", error); // Log any parsing error
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        feedback: "❌ Invalid JSON format in the request body.",
      }),
    };
  }

  const { code, testCases } = parsedBody;

  // Validate input (e.g., limit code size, remove malicious patterns)
  const forbiddenPatterns = /eval|setTimeout|setInterval|require|process|global/;
  if (forbiddenPatterns.test(code)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        feedback: "❌ Forbidden patterns detected in your code.",
      }),
    };
  }
  

  try {
    // Create a sandbox environment for executing code
    const sandbox = {
      React,
      ReactDOMServer,
      List: null, // Placeholder for user's List component
    };
    const context = vm.createContext(sandbox);

    // Wrap code in a function for testing and evaluate the code in the sandbox
    const func = new vm.Script(`${code}; module.exports = List;`);  // Adjust to export List function
    func.runInContext(context);

    // Run test cases
    const results = testCases.map(({ inputs, expectedOutput }) => {
      const listComponent = sandbox.List;  // Get the List component from the sandbox

      // Render the component to static HTML
      const renderedOutput = ReactDOMServer.renderToStaticMarkup(React.createElement(listComponent, ...inputs));

      return {
        passed: renderedOutput.trim() === expectedOutput.trim(),
        inputs,
        result: renderedOutput,
        expectedOutput,
      };
    });

    const allPassed = results.every((test) => test.passed);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        feedback: allPassed
          ? "✅ Correct! All test cases passed."
          : `❌ Some test cases failed:\n${results
              .filter((test) => !test.passed)
              .map(
                (test) =>
                  `Inputs: ${JSON.stringify(test.inputs)}, Expected: ${test.expectedOutput}, Got: ${test.result}`
              )
              .join("\n")}`,
      }),
    };
  } catch (err) {
    console.error("Error executing code:", err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        feedback: `❌ Error executing code: ${err.message}`,
      }),
    };
  }
};
