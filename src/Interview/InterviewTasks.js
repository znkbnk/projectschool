import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewTaskTitle from "./InterviewTaskTitle";
import questions from "../data/InterviewTasksData";
import styles from "./InterviewTasks.module.css";
import ReactDOMServer from "react-dom/server";

const InterviewTasks = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const textareaRef = useRef(null);

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[currentQuestion];

  const handleTextAreaChange = (e) => {
    setUserCode(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;

    setFeedback("");
  };

  const handleRunCode = () => {
    const { testCases } = question;

    if (/eval|setTimeout|setInterval|window\.open|fetch|XMLHttpRequest|document|window|parent|localStorage|sessionStorage|navigator|screen|geolocation|console/.test(userCode)) {
      setFeedback("❌ Forbidden code detected.");
      return;
    }
  
    // Create the iframe with sandboxing
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.sandbox = "allow-scripts allow-same-origin"; // Enable both scripts and same-origin access
    document.body.appendChild(iframe);
  
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
    // Inject React script into the iframe
    const reactScript = iframeDocument.createElement("script");
    reactScript.src = "https://unpkg.com/react@18/umd/react.development.js";
    reactScript.integrity = "sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L"; // Add Subresource Integrity
    reactScript.crossOrigin = "anonymous";
    iframeDocument.body.appendChild(reactScript);
  
    // After React is loaded, inject ReactDOM script
    reactScript.onload = () => {
      const reactDOMScript = iframeDocument.createElement("script");
      reactDOMScript.src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js"; // ReactDOM
      iframeDocument.body.appendChild(reactDOMScript);
  
      // Wait for ReactDOM to load
      reactDOMScript.onload = () => {
        try {
          const iframeWindow = iframe.contentWindow;
  
          // Wait for React and ReactDOM to be fully loaded
          if (!iframeWindow.React || !iframeWindow.ReactDOM) {
            throw new Error("❌ Error: React or ReactDOM are not loaded correctly.");
          }
  
          // Babel transformation to allow JSX in the user's code
          const babelScript = iframeDocument.createElement("script");
          babelScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.1/babel.min.js";
          iframeDocument.body.appendChild(babelScript);
  
          babelScript.onload = () => {
            try {
              // Transpile the user code with Babel
              const transpiledCode = iframeWindow.Babel.transform(userCode, {
                presets: ["react", "env"],
              }).code;
  
              // Match the function or component name in the user code
              const functionRegex =
                /(?:const|function|class)\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/;
              const match = userCode.match(functionRegex);
  
              if (!match) {
                throw new Error(
                  "❌ Error: Could not detect a valid function or component in your code."
                );
              }
  
              const detectedFunctionName = match[1];
  
              // Create the function using the Function constructor
              const wrappedCode = `
                (function() {
                  ${transpiledCode}
                  window.${detectedFunctionName} = ${detectedFunctionName};
                })();
              `;
  
              // Create the function within the iframe context
              const func = new iframeWindow.Function(wrappedCode);
  
              // Set timeout to prevent infinite loops or resource hogging
              const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("❌ Code execution timed out.")), 5000) // 5 seconds timeout
              );
  
              // Execute user code with a timeout
              Promise.race([func(), timeoutPromise])
                .then(() => {
                  // Retrieve the function from the iframe
                  const userFunction = iframeWindow[detectedFunctionName];
  
                  if (
                    typeof userFunction !== "function" &&
                    !React.isValidElement(userFunction)
                  ) {
                    throw new Error(
                      `❌ Error: '${detectedFunctionName}' is not a valid function or React component.`
                    );
                  }
  
                  // Run the test cases on the user's function
                  let allTestsPassed = true;
                  let failedTestDetails = [];
  
                  testCases.forEach(({ inputs, expectedOutput }, index) => {
                    const result = userFunction(...inputs);
  
                    let resultString;
                    if (React.isValidElement(result)) {
                      resultString = ReactDOMServer.renderToStaticMarkup(result);
                    } else {
                      resultString = Array.isArray(result) ? result.join(",") : result;
                    }
  
                    const expectedString = Array.isArray(expectedOutput)
                      ? expectedOutput.join(",")
                      : expectedOutput;
  
                    if (resultString !== expectedString) {
                      allTestsPassed = false;
                      failedTestDetails.push({
                        testCaseIndex: index + 1,
                        inputs,
                        expectedOutput,
                        result: resultString,
                      });
                    }
                  });
  
                  if (allTestsPassed) {
                    setFeedback("✅ Correct! All test cases passed.");
                  } else {
                    let errorMessages = "❌ Some test cases failed. Try again!\n\n";
                    failedTestDetails.forEach((testDetail) => {
                      errorMessages += `Test Case ${testDetail.testCaseIndex} failed:\n`;
                      errorMessages += `Inputs: ${JSON.stringify(testDetail.inputs)}\n`;
                      errorMessages += `Expected Output: ${testDetail.expectedOutput}\n`;
                      errorMessages += `Actual Output: ${testDetail.result}\n\n`;
                    });
                    setFeedback(errorMessages);
                  }
                })
                .catch((error) => {
                  setFeedback(`❌ Error: ${error.message}`);
                })
                .finally(() => {
                  document.body.removeChild(iframe);
                });
            } catch (error) {
              setFeedback(`❌ Error: ${error.message}`);
            }
          };
        } catch (error) {
          setFeedback(`❌ Error: ${error.message}`);
        }
      };
    };
  };
  

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserCode("");
    setFeedback("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "300px";
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) =>
      prev === 0 ? questions.length - 1 : prev - 1
    );
    setUserCode("");
    setFeedback("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "300px";
    }
  };

  return (
    <div>
      <Navbar />
      <InterviewTaskTitle />

      <div className={styles.container}>
        <div className={styles.questionCard}>
          <h3>React/JavaScript Question: {question.id}</h3>
          <h4>Task type: {question.type}</h4>
          <p className={styles.questionText}>{question.text}</p>
          <div className={styles.navigationButtons}>
            <button onClick={handlePreviousQuestion} className={styles.button}>
              Previous
            </button>
            <button onClick={handleNextQuestion} className={styles.button}>
              Next
            </button>
          </div>
        </div>

        <div className={styles.codeEditor}>
          <textarea
            placeholder="Type your code here..."
            className={styles.textArea}
            value={userCode}
            onChange={handleTextAreaChange}
            ref={textareaRef}
          />
          <button onClick={handleRunCode} className={styles.runButton}>
            Run
          </button>
          {feedback && (
            <p
              className={`${styles.feedback} ${
                feedback.startsWith("✅")
                  ? styles.correct
                  : feedback.startsWith("❌")
                  ? styles.error
                  : ""
              }`}
            >
              {feedback}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InterviewTasks;
