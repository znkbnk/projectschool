import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewTaskTitle from "./InterviewTaskTitle";
import questions from "../data/InterviewTasksData";
import styles from "./InterviewTasks.module.css";
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom'

const InterviewTasks = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const textareaRef = useRef(null); 

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[currentQuestion];

  // Adjust the textarea height dynamically
  const handleTextAreaChange = (e) => {
    setUserCode(e.target.value);
    e.target.style.height = 'auto'; // Reset the height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content

    setFeedback("");
  };

  const handleRunCode = () => {
    const { testCases } = question;
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const iframeWindow = iframe.contentWindow;
    let allTestsPassed = true;
    let failedTestDetails = [];
  
    try {
      iframeWindow.React = React; // Make React available in the iframe
      iframeWindow.ReactDOM = ReactDOM; // Also make ReactDOM available
  
      // Load Babel in the iframe to transform JSX
      const babelScript = document.createElement('script');
      babelScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.1/babel.min.js';
      iframeWindow.document.body.appendChild(babelScript);
  
      // Wait for Babel to load before running user code
      babelScript.onload = () => {
        try {
          // Transform the user code from JSX to JavaScript using Babel
          const transpiledCode = iframeWindow.Babel.transform(userCode, {
            presets: ["react", "env"],
          }).code;
  
          // Use regex to detect the function name in the user code
          const functionRegex = /(?:const|function|class)\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/;
          const match = userCode.match(functionRegex);
  
          if (!match) {
            throw new Error("❌ Error: Could not detect a valid function or component in your code.");
          }
  
          const detectedFunctionName = match[1];
  
          // Wrap the user code in a function and add it to the iframe window
          const wrappedCode = `
            (function() {
              ${transpiledCode}
              window.${detectedFunctionName} = ${detectedFunctionName};
            })();
          `;
  
          iframeWindow.eval(wrappedCode);
  
          const userFunction = iframeWindow[detectedFunctionName];
  
          if (typeof userFunction !== "function" && !React.isValidElement(userFunction)) {
            throw new Error(`❌ Error: '${detectedFunctionName}' is not a valid function or React component.`);
          }
  
          testCases.forEach(({ inputs, expectedOutput }, index) => {
            const result = userFunction(...inputs);
  
            let resultString;
            if (React.isValidElement(result)) {
              resultString = ReactDOMServer.renderToStaticMarkup(result);
            } else {
              resultString = Array.isArray(result) ? result.join(",") : result;
            }
  
            const expectedString = Array.isArray(expectedOutput) ? expectedOutput.join(",") : expectedOutput;
  
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
        } catch (error) {
          setFeedback(`❌ Error: ${error.message}`);
        } finally {
          document.body.removeChild(iframe);
        }
      };
    } catch (error) {
      setFeedback(`❌ Error: ${error.message}`);
    }
  };
  
  

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserCode("");
    setFeedback("");
  
    // Reset textarea height to its default size
    if (textareaRef.current) {
      textareaRef.current.style.height = "300px"; // Adjust this value to your desired default size
    }
  };
  
  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
    setUserCode("");
    setFeedback("");
  
    // Reset textarea height to its default size
    if (textareaRef.current) {
      textareaRef.current.style.height = "300px"; // Adjust this value to your desired default size
    }
  };
  

  return (
    <div>
      <Navbar />
      <InterviewTaskTitle />

      <div className={styles.container}>
        <div className={styles.questionCard}>
          <h4>React/JavaScript Question: {question.id}</h4>
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
              className={`${styles.feedback} ${feedback.startsWith("✅") ? styles.correct : feedback.startsWith("❌") ? styles.error : ''}`}
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
