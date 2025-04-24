import React, { useState } from "react";
import quizData from './quizData';
import "./Quiz.css";

const Quiz1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        const isCorrect = selectedOption === quizData[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 1);
        }
        
        setUserAnswers([...userAnswers, {
            question: quizData[currentQuestion].question,
            selectedOption,
            correctAnswer: quizData[currentQuestion].answer,
            isCorrect
        }]);
    };

    const nextQuestionHandler = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers([]);
        setShowScore(false);
        setShowReview(false);
    };

    const toggleReview = () => {
        setShowReview(!showReview);
    };

    return (
        <div className="quiz-app-container">
            {showScore ? (
                <div className="results-section">
                    <h2>Quiz Results</h2>
                    <p className="score-text">
                        You scored {score} out of {quizData.length}!
                    </p>
                    
                    <div className="action-buttons">
                        <button onClick={toggleReview} className="review-btn">
                            {showReview ? "Hide Answers" : "Review Answers"}
                        </button>
                        <button onClick={restartQuiz} className="restart-btn">
                            Try Again
                        </button>
                    </div>

                    {showReview && (
                        <div className="answers-review">
                            <h3>Answer Review:</h3>
                            <ul>
                                {userAnswers.map((answer, index) => (
                                    <li key={index} className={answer.isCorrect ? "correct" : "incorrect"}>
                                        <p><strong>Q{index + 1}:</strong> {answer.question}</p>
                                        <p>Your answer: {answer.selectedOption}</p>
                                        {!answer.isCorrect && (
                                            <p>Correct answer: {answer.correctAnswer}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className="quiz-container">
                    <h1>Interactive Knowledge Check</h1>
                    <div className="question-container">
                        <div className="question-info">
                            <span>Question {currentQuestion + 1} of {quizData.length}</span>
                            <span>Score: {score}</span>
                        </div>
                        
                        <h3 className="question-text">{quizData[currentQuestion].question}</h3>
                        
                        <div className="options-container">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(option)}
                                    className="option-btn"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <button 
                        onClick={nextQuestionHandler} 
                        className="next-btn"
                        disabled={!userAnswers[currentQuestion]}
                    >
                        {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz1;
