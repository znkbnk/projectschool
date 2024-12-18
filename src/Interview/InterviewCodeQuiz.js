import React, { useState, useEffect } from "react";
import ReactInterviewQuestionQuiz from "../data/ReactInterviewCodeQuiz";
import "./interviewCodeQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import InterviewCodeQuizTitle from "./InterviewCodeQuizTitle";
import { Helmet } from "react-helmet";

const customDarkTheme = {
  ...dark,  // Start with the default dark theme
  'hljs-keyword': { color: '#3498db', fontWeight: 'bold' },  // Blue for keywords
  'hljs-function': { color: '#e74c3c' },  // Red for functions
  'hljs-params': { color: '#e74c3c' },  // Red for parameters
  'hljs-string': { color: '#9b59b6' },  // Purple for strings
  'hljs-variable': { color: '#3498db' },  // Blue for variables
  'hljs-comment': { color: '#7f8c8d' },  // Light gray for comments
  'hljs-number': { color: '#f39c12' },  // Yellow for numbers
  'hljs-class .hljs-title': { color: '#1abc9c' },  // Teal for class names
  'hljs-attr': { color: '#f39c12' },  // Yellow for attributes
  'hljs-tag': { color: '#e67e22' },  // Orange for tags
  'hljs-type': { color: '#e74c3c' },  // Red for types
  'hljs-built_in': { color: '#8e44ad' },  // Violet for built-in functions
  'hljs-symbol': { color: '#d35400' },  // Dark Orange for symbols
  'hljs-link': { color: '#2980b9' },  // Light Blue for links
  'hljs-doctag': { color: '#e67e22' },  // Orange for documentation tags
  'hljs-title': { color: '#e74c3c' },  // Red for function and variable names like MyComponent
  'hljs-section': { color: '#16a085' },  // Dark Teal for sections
  'hljs-meta': { color: '#f39c12' },  // Yellow for metadata
  'hljs-subst': { color: '#f1c40f' },  // Gold for substitutions
  'hljs-deletion': { color: '#c0392b' },  // Red for deleted lines
  'hljs-addition': { color: '#2ecc71' },  // Green for additions
  'hljs-regexp': { color: '#8e44ad' },  // Violet for regular expressions
  'hljs-selector-id': { color: '#9b59b6' },  // Purple for IDs in selectors
  'hljs-selector-class': { color: '#2980b9' },  // Light Blue for classes in selectors
  'hljs-selector-attr': { color: '#e67e22' },  // Orange for attributes in selectors
  'hljs-attribute': { color: '#16a085' },  // Dark Teal for attributes
  'hljs-meta-keyword': { color: '#3498db' },  // Blue for meta keywords
  'hljs-meta-string': { color: '#2ecc71' },  // Green for meta strings
  'hljs-emphasis': { fontStyle: 'italic', color: '#f39c12' },  // Yellow for emphasized text
  'hljs-strong': { fontWeight: 'bold', color: '#e74c3c' },  // Red for strong emphasis
  'hljs-code': { fontFamily: 'monospace', backgroundColor: '#2c3e50', padding: '2px 4px', borderRadius: '4px' },  // Style for inline code
  'hljs-decorator': { color: '#ff6347' },  // Tomato color for decorators
  'hljs-punctuation': { color: '#7f8c8d' },  // Light gray for punctuation marks
  'hljs-selector-pseudo': { color: '#ff6347' },  // Tomato for pseudo-selectors
  'hljs-function .hljs-title': { color: '#e74c3c' },  // Red for function names like MyComponent
  'hljs-literal': { color: '#e67e22' },  // Orange for literals
  'hljs-tag .hljs-name': { color: '#f1c40f' },  // Gold for tag names
  'hljs-tag .hljs-value': { color: '#16a085' },  // Teal for tag values
  'hljs-keyword .hljs-title': { color: '#3498db' },  // Blue for keyword titles
  'hljs-link .hljs-url': { color: '#2980b9' },  // Light blue for URL links
  'hljs-function .hljs-params': { color: '#e74c3c' },  // Red for function parameters
  
};





const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const InterviewCodeQuiz = () => {
  const [questions] = useState(ReactInterviewQuestionQuiz);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const questionsExpirationTime = 1 * 60 * 1000; // Set expiration time to 5 minutes

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  useEffect(() => {
    const storedData = localStorage.getItem("randomQuestions");
    const timestamp = localStorage.getItem("questionsTimestamp");

    if (storedData && timestamp) {
      const now = new Date().getTime();
      if (now - timestamp < questionsExpirationTime) {
        setRandomQuestions(JSON.parse(storedData));
        return;
      }
    }

    const newRandomQuestions = getRandomQuestions(questions, 20);
    setRandomQuestions(newRandomQuestions);
    localStorage.setItem("randomQuestions", JSON.stringify(newRandomQuestions));
    localStorage.setItem("questionsTimestamp", new Date().getTime());
  }, [questions, questionsExpirationTime]);

  const currentQuestion = randomQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  
    setShowResult(true);
  };
  
  

  const handleNextQuestion = () => {
    setShowResult(false);

    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResult(false);

    const newRandomQuestions = getRandomQuestions(questions, 20);
    setRandomQuestions(newRandomQuestions);
    localStorage.setItem("randomQuestions", JSON.stringify(newRandomQuestions));
    localStorage.setItem("questionsTimestamp", new Date().getTime());
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / randomQuestions.length) * 100;

  return (
    <div>
      <Helmet>
        <title>React Interview Code Quiz</title>
      </Helmet>
      <ScrollToTopOnNavigation />
      <Navbar />
      <InterviewCodeQuizTitle />

      <div className="quiz-container">
        {!isFinished ? (
          <div className="quiz-card">
            <h2>{currentQuestion?.question}</h2>

            <SyntaxHighlighter language="javascript" style={customDarkTheme}>
              {currentQuestion?.codeSnippet}
            </SyntaxHighlighter>
            <div className="options">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    showResult && option === currentQuestion.correctAnswer
                      ? "correct"
                      : showResult &&
                        option === selectedAnswers[currentQuestionIndex]
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={showResult}
                >
                  {option}
                </button>
              ))}
            </div>
            {showResult && (
              <div className="feedback">
                {selectedAnswers[currentQuestionIndex] ===
                currentQuestion.correctAnswer
                  ? "Correct! 🎉"
                  : "Incorrect 😞"}
              </div>
            )}
            {showResult && (
              <button className="next-btn" onClick={handleNextQuestion}>
                {currentQuestionIndex < randomQuestions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            )}
            <div className="quiz-progress-bar">
              <div
                className="quiz-progress"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Quiz Completed!</h2>
            <p>
              Your score: {score}/{randomQuestions.length}
            </p>
            <button className="retry-btn" onClick={resetQuiz}>
              Retry Quiz
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default InterviewCodeQuiz;
