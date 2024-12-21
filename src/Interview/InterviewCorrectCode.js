import React, { useState, useEffect } from "react";
import ReactInterviewCorrectCodeData from "../data/InterviewCorrectCodeData";
import { useParams, useNavigate } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./InterviewCorrectCode.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InterviewQuestionQuizTitle from "./InterviewQuestionQuizTitle";

const customDarkTheme = {
  ...dark,  // Start with the default dark theme
  'hljs-keyword': { color: '#7aa6da', fontWeight: 'bold' },  // Soft Blue for keywords
  'hljs-function': { color: '#d87b5e' },  // Muted Orange for functions
  'hljs-params': { color: '#d87b5e' },  // Muted Orange for parameters
  'hljs-string': { color: '#98c379' },  // Green for strings
  'hljs-variable': { color: '#d7ba7d' },  // Warm Beige for variables
  'hljs-comment': { color: 'lightGreen' },  // Cool Gray for comments
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

const getQuestionBySlug = (slug) => {
  return ReactInterviewCorrectCodeData.find((quiz) => quiz.slug === slug);
};

const InterviewCorrectCode = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    if (quizQuestions.length === 0) {
      const randomizedQuestions = shuffleArray(ReactInterviewCorrectCodeData).slice(0, 20);
      setQuizQuestions(randomizedQuestions);

      if (slug) {
        const specificQuestion = getQuestionBySlug(slug);
        if (specificQuestion) {
          setCurrentQuestion(specificQuestion);
        } else {
          navigate(`/interview/InterviewCorrectCode/${randomizedQuestions[0].slug}`);
          setCurrentQuestion(randomizedQuestions[0]);
        }
      } else {
        setCurrentQuestion(randomizedQuestions[0]);
        navigate(`/interview/InterviewCorrectCode/${randomizedQuestions[0].slug}`);
      }
    }
    ScrollToTopOnNavigation()
  }, [slug, navigate, quizQuestions.length]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option.isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
    setAnsweredQuestions((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    const currentIndex = quizQuestions.indexOf(currentQuestion);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentQuestion(quizQuestions[currentIndex + 1]);
      navigate(`/interview/InterviewCorrectCode/${quizQuestions[currentIndex + 1].slug}`);
    } else {
      setQuizCompleted(true);
    }
    ScrollToTopOnNavigation()
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnsweredQuestions(0);
    setCurrentQuestion(quizQuestions[0]);
    navigate(`/interview/InterviewCorrectCode/${quizQuestions[0].slug}`);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const progressPercentage = (answeredQuestions / quizQuestions.length) * 100;

  return (
    <div>
      <Navbar />
      <InterviewQuestionQuizTitle />

      <div className="correctCode-container">
        <div className="correctCode-card">
          {!quizCompleted ? (
           <>
           <h2>{currentQuestion.question}</h2>
           <div className="correctCode">
             {currentQuestion.options.map((option, index) => (
               <button
                 key={index}
                 className={`correctCode-btn ${
                   showResult && option.isCorrect
                     ? "correct"
                     : showResult && option === selectedAnswer
                     ? "incorrect"
                     : ""
                 }`}
                 onClick={() => handleAnswerClick(option)}
                 disabled={showResult}
               >
                 <div className="code-container">
                   <SyntaxHighlighter language="javascript" style={customDarkTheme}>
                     {option.code}
                   </SyntaxHighlighter>
                 </div>
               </button>
             ))}
           </div>
           {showResult && (
             <div className="feedback">
               {selectedAnswer && selectedAnswer.isCorrect
                 ? "Correct! 🎉"
                 : "Incorrect 😞"}
             </div>
           )}
           {showResult && (
             <button className="next-btn" onClick={handleNextQuestion}>
               {quizQuestions.indexOf(currentQuestion) < quizQuestions.length - 1
                 ? "Next Question"
                 : "Finish Quiz"}
             </button>
           )}
           <div className="correctCode-progress-bar">
             <div
               className="correctCode-progress"
               style={{ width: `${progressPercentage}%` }}
             ></div>
           </div>
         </>
         
          ) : (
            <div className="correctCode-result">
              <h2>Quiz Completed!</h2>
              <p>
                Your score: {score}/{quizQuestions.length}
              </p>
              <button className="retry-btn" onClick={resetQuiz}>
                Retry Quiz
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InterviewCorrectCode;
