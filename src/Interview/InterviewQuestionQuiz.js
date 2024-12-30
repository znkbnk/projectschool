import React, { useState, useEffect } from "react";
import ReactInterviewQuestionQuiz from "../data/ReactInterviewQuestionQuiz";
import { useParams, useNavigate } from "react-router-dom";
import "./InterviewQuestionQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InterviewQuestionQuizTitle from "./InterviewQuestionQuizTitle";

// Function to get the question by slug
const getQuestionBySlug = (slug) => {
  return ReactInterviewQuestionQuiz.find((quiz) => quiz.slug === slug);
};

const InterviewQuestionQuiz = () => {
  const { slug } = useParams();  // Get slug from URL
  const navigate = useNavigate();

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);  // Track answered questions

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  // Fetch and randomize questions on component mount
  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      return newArray;
    };
  
    if (quizQuestions.length === 0) { // Only shuffle once
      const randomizedQuestions = shuffleArray(ReactInterviewQuestionQuiz).slice(0, 20);
      setQuizQuestions(randomizedQuestions);
  
      // Set the first question
      if (slug) {
        const specificQuestion = getQuestionBySlug(slug);
        if (specificQuestion) {
          setCurrentQuestion(specificQuestion);
        } else {
          navigate(`/interview/InterviewQuiz/${randomizedQuestions[0].slug}`);
          setCurrentQuestion(randomizedQuestions[0]);
        }
      } else {
        setCurrentQuestion(randomizedQuestions[0]);
        navigate(`/interview/InterviewQuiz/${randomizedQuestions[0].slug}`);
      }
    }
  }, [slug, navigate, quizQuestions.length]);
  

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
    setAnsweredQuestions(prev => prev + 1); 
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    const currentIndex = quizQuestions.indexOf(currentQuestion);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentQuestion(quizQuestions[currentIndex + 1]);
      // Update the URL to reflect the new question's slug
      navigate(`/interview/InterviewQuiz/${quizQuestions[currentIndex + 1].slug}`);
    } else {
      // Once the last question is reached, mark the quiz as completed
      setQuizCompleted(true); 
    }
  };
  

  const resetQuiz = () => {
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer("");
    setShowResult(false);
    setAnsweredQuestions(0); 
    setCurrentQuestion(quizQuestions[0]); 
    navigate(`/interview/InterviewQuiz/${quizQuestions[0].slug}`); 
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const progressPercentage = (answeredQuestions / quizQuestions.length) * 100;

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
            {quizQuestions.indexOf(currentQuestion) < quizQuestions.length - 1
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

export default InterviewQuestionQuiz;
