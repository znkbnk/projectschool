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
  'hljs-keyword': { color: '#7aa6da', fontWeight: 'bold' },  // Soft Blue for keywords
  'hljs-function': { color: '#d87b5e' },  // Muted Orange for functions
  'hljs-params': { color: '#d87b5e' },  // Muted Orange for parameters
  'hljs-string': { color: '#98c379' },  // Green for strings
  'hljs-variable': { color: '#d7ba7d' },  // Warm Beige for variables
  'hljs-comment': { color: '#5c6370' },  // Cool Gray for comments
  'hljs-number': { color: '#d19a66' },  // Soft Orange for numbers
  'hljs-class .hljs-title': { color: '#e06c75' },  // Red for class names
  'hljs-attr': { color: '#c678dd' },  // Purple for attributes
  'hljs-tag': { color: '#e5c07b' },  // Gold for tags
  'hljs-type': { color: '#c678dd' },  // Purple for types
  'hljs-built_in': { color: '#56b6c2' },  // Teal for built-in functions
  'hljs-symbol': { color: '#d19a66' },  // Soft Orange for symbols
  'hljs-link': { color: '#61afef' },  // Bright Blue for links
  'hljs-doctag': { color: '#e5c07b' },  // Gold for documentation tags
  'hljs-title': { color: '#d7ba7d' },  // Warm Beige for function and variable names
  'hljs-section': { color: '#56b6c2' },  // Teal for sections
  'hljs-meta': { color: '#e5c07b' },  // Gold for metadata
  'hljs-subst': { color: '#e06c75' },  // Red for substitutions
  'hljs-deletion': { color: '#be5046' },  // Dark Red for deleted lines
  'hljs-addition': { color: '#98c379' },  // Green for additions
  'hljs-regexp': { color: '#c678dd' },  // Purple for regular expressions
  'hljs-selector-id': { color: '#e06c75' },  // Red for IDs in selectors
  'hljs-selector-class': { color: '#61afef' },  // Bright Blue for classes in selectors
  'hljs-selector-attr': { color: '#c678dd' },  // Purple for attributes in selectors
  'hljs-attribute': { color: '#98c379' },  // Green for attributes
  'hljs-meta-keyword': { color: '#7aa6da' },  // Soft Blue for meta keywords
  'hljs-meta-string': { color: '#98c379' },  // Green for meta strings
  'hljs-emphasis': { fontStyle: 'italic', color: '#d19a66' },  // Soft Orange for emphasized text
  'hljs-strong': { fontWeight: 'bold', color: '#d87b5e' },  // Muted Orange for strong emphasis
  'hljs-code': { fontFamily: 'monospace', backgroundColor: '#2c313c', padding: '2px 4px', borderRadius: '4px' },  // Style for inline code
  'hljs-decorator': { color: '#e06c75' },  // Red for decorators
  'hljs-punctuation': { color: '#abb2bf' },  // Light Gray for punctuation marks
  'hljs-selector-pseudo': { color: '#c678dd' },  // Purple for pseudo-selectors
  'hljs-function .hljs-title': { color: '#d87b5e' },  // Muted Orange for function names
  'hljs-literal': { color: '#d19a66' },  // Soft Orange for literals
  'hljs-tag .hljs-name': { color: '#61afef' },  // Bright Blue for tag names
  'hljs-tag .hljs-value': { color: '#98c379' },  // Green for tag values
  'hljs-keyword .hljs-title': { color: '#7aa6da' },  // Soft Blue for keyword titles
  'hljs-link .hljs-url': { color: '#56b6c2' },  // Teal for URL links
  'hljs-function .hljs-params': { color: '#d87b5e' },  // Muted Orange for function parameters
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
