import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import ReactInterviewQuestionQuiz from "../data/ReactInterviewQuestionQuiz";
import "./InterviewQuestionQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InterviewQuestionQuizTitle from "./InterviewQuestionQuizTitle";

const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const InterviewQuestionQuiz = () => {
  const navigate = useNavigate(); // Initialize navigate hook
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

  useEffect(() => {
    const randomizedQuestions = getRandomQuestions(ReactInterviewQuestionQuiz, 20);
    setQuizQuestions(randomizedQuestions);
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);

    // Navigate to the slug after answering
    navigate(`/interview/interviewQuiz/${currentQuestion.slug}`);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Navigate to the next question's slug
      navigate(`/interview/interviewQuiz/${quizQuestions[currentQuestionIndex + 1].slug}`);
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
    setQuizQuestions(getRandomQuestions(ReactInterviewQuestionQuiz, 20));
  };

  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <InterviewQuestionQuizTitle />
      <div className="quiz-container">
        <div className="quiz-card">
          {!quizCompleted ? (
            <>
              <h2>{currentQuestion.question}</h2>
              <div className="options">
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
                <div className="feedback">
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Correct! 🎉"
                    : "Incorrect 😞"}
                </div>
              )}
              {showResult && (
                <button className="next-btn" onClick={handleNextQuestion}>
                  {currentQuestionIndex < quizQuestions.length - 1
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
            </>
          ) : (
            <div className="quiz-result">
              <h2>Quiz Completed!</h2>
              <p>Your score: {score}/{quizQuestions.length}</p>
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

export default InterviewQuestionQuiz;
