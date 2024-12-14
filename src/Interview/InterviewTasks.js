import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewTaskTitle from "./InterviewTaskTitle";
import questions from "../data/InterviewTasksData";
import styles from "./InterviewTasks.module.css";

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

  const handleRunCode = async () => {
    setFeedback("⏳ Running your code...");
  
    try {
      const response = await fetch("http://localhost:8888/api/executeCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: userCode, testCases: question.testCases }),
      });
  
      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      setFeedback(`❌ Error: ${error.message}`);
    }
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
            placeholder='Type your code here...'
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
