import React, { useState } from "react";
import ReactInterviewQuestionQuiz from "../data/ReactInterviewCodeQuiz";
import "./interviewCodeQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import InterviewCodeQuizTitle from "./InterviewCodeQuizTitle";
import { Helmet } from "react-helmet";

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

  // Define randomQuestions before using it
  const randomQuestions = getRandomQuestions(questions, 20);

  // Initialize currentCodeSnippet with the first question's snippet
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(
    randomQuestions[0]?.codeSnippet || ""
  );

  const currentQuestion = randomQuestions[currentQuestionIndex];

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  const handleAnswerClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true); // This triggers showing the result, without updating the code snippet
  };

  const handleNextQuestion = () => {
    setShowResult(false);

    // Update the code snippet only when moving to the next question
    const nextQuestion = randomQuestions[currentQuestionIndex + 1];
    if (nextQuestion) {
      setCurrentCodeSnippet(nextQuestion.codeSnippet); // Update code snippet to the next question's code
    }

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
    setCurrentCodeSnippet(randomQuestions[0]?.codeSnippet || ""); // Reset to the first question's snippet
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / randomQuestions.length) * 100;

  const calculateEditorHeight = (codeSnippet) => {
    const lineCount = codeSnippet.split("\n").length; // Split code into lines and count them
    return Math.max(200, lineCount * 10); // Minimum height of 200px, 20px per line
  };

  const editorHeight = calculateEditorHeight(
    currentCodeSnippet || currentQuestion.codeSnippet
  );

  return (
    <div>
      <ScrollToTopOnNavigation />

      <Helmet>
        <title>React Interview Code Quiz</title>
        <meta
          name='description'
          content='Test your React knowledge with this interactive code quiz. Answer questions and check your coding skills!'
        />
        <meta
          name='keywords'
          content='React, Interview, Coding, Quiz, JavaScript, Programming, Web Development'
        />
        <meta name='author' content='Project School' />
        <meta property='og:title' content='React Interview Code Quiz' />
        <meta
          property='og:description'
          content='Test your React knowledge with this interactive code quiz. Answer questions and check your coding skills!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.projectschool.dev/InterviewCodeQuiz'
        />
        <meta
          property='og:image'
          content='https://www.projectschool.dev/images/logowebp'
        />
      </Helmet>

      <Navbar />
      <InterviewCodeQuizTitle />

      <div className='code-quiz-container'>
        {!isFinished ? (
          <div className='code-quiz-card'>
            <h2>{currentQuestion.question}</h2>
            <AceEditor
  mode="javascript"
  theme="monokai"
  name="code-editor"
  editorProps={{ $blockScrolling: true }}
  value={currentCodeSnippet || currentQuestion.codeSnippet}
  width="100%"
  height={`${editorHeight}px`}
  onChange={(newValue) => console.log(newValue)}
  showGutter={false}
  readOnly={true}
  style={{ borderRadius: '8px', fontSize: '16px' }} // Adjust the font size here
/>



            <div className='code-options'>
              <div className='option-column'>
                {currentQuestion.options.slice(0, 2).map((option, index) => (
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
              <div className='option-column'>
                {currentQuestion.options.slice(2).map((option, index) => (
                  <button
                    key={index + 2}
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
            </div>

            {showResult && (
              <div className='code-feedback'>
                {selectedAnswers[currentQuestionIndex] ===
                currentQuestion.correctAnswer
                  ? "Correct! 🎉"
                  : "Incorrect 😞"}
              </div>
            )}
            {showResult && (
              <button className='next-btn' onClick={handleNextQuestion}>
                {currentQuestionIndex < randomQuestions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            )}
            <div className='code-quiz-progress-bar'>
              <div
                className='code-quiz-progress'
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className='code-quiz-result'>
            <h2>Quiz Completed!</h2>
            <p>
              Your score: {score}/{randomQuestions.length}
            </p>
            <button className='retry-btn' onClick={resetQuiz}>
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
