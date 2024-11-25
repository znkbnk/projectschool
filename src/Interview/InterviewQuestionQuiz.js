import React, { useState, useEffect } from "react";
import interviewQuestionQuizData from "../data/interviewQuestionQuizData";
import "./InterviewQuestionQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const getRandomQuestions = (questions, count) => {
  // Shuffle the questions array and select the first 'count' questions
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const InterviewQuestionQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  // Fetch and randomize questions on component mount
  useEffect(() => {
    const randomizedQuestions = getRandomQuestions(
      interviewQuestionQuizData,
      20
    );
    setQuizQuestions(randomizedQuestions);
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setShowResult(false);
    setQuizQuestions(getRandomQuestions(interviewQuestionQuizData, 20)); // Re-randomize questions
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />

      <div className='quiz-container'>
        <div className='quiz-card'>
          {!quizCompleted ? (
            <>
              <h2>{currentQuestion.question}</h2>
              <div className='options'>
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${
                      showResult && option === currentQuestion.correctAnswer
                        ? "correct"
                        : showResult && option === selectedAnswer
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
                <div className='feedback'>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Correct! 🎉"
                    : "Incorrect 😞"}
                </div>
              )}
              {showResult && (
                <button className='next-btn' onClick={handleNextQuestion}>
                  {currentQuestionIndex < quizQuestions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </button>
              )}
              <div className='quiz-progress-bar'>
                <div
                  className='quiz-progress'
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </>
          ) : (
            <div className='quiz-result'>
              <h2>Quiz Completed!</h2>
              <p>
                Your score: {score}/{quizQuestions.length}
              </p>
              <button className='retry-btn' onClick={resetQuiz}>
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

export default InterviewQuestionQuiz;
