const { VM } = require("vm2");

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

  const vm = new VM({
    timeout: 5000, // 5-second execution timeout
    sandbox: {}, // Isolated environment
  });

  try {
    // Execute code
    const results = testCases.map(({ inputs, expectedOutput }) => {
      const func = vm.run(`${code}; module.exports = userFunction;`);
      const result = func(...inputs);
      return {
        passed: JSON.stringify(result) === JSON.stringify(expectedOutput),
        inputs,
        result,
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
