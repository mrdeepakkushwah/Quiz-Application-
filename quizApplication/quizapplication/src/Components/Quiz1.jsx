import React, { useState } from "react";
import quizData from './quizData';
import "./Quiz.css";

const Quiz1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showScore, setShowScore] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        // Save user answer and check correctness
        const isCorrect = selectedOption === quizData[currentQuestion].answer;
        setUserAnswers([...userAnswers, {
            question: quizData[currentQuestion].question,
            selectedOption,
            isCorrect,
            correctAnswer: quizData[currentQuestion].answer
        }]);

        if (isCorrect) {
            setScore(score + 1);
        }

        // Move to next question or end quiz
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizCompleted(true);
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowScore(false);
        setQuizCompleted(false);
        setUserAnswers([]);
    };

    return (
        <div className="quiz-container">
            {!showScore ? (
                <div className="question-card">
                    <div className="quiz-header">
                        <h1>React Mastery Quiz</h1>
                        <div className="progress-indicator">
                            Question {currentQuestion + 1} of {quizData.length}
                        </div>
                    </div>

                    <div className="question-content">
                        <h2 className="question-text">
                            {quizData[currentQuestion].question}
                        </h2>

                        <div className="options-grid">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="navigation-controls">
                        <button
                            className="next-btn"
                            onClick={handleNextQuestion}
                            disabled={!selectedOption}
                        >
                            {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="results-card">
                    <h2>Quiz Results</h2>
                    <div className="score-display">
                        You scored {score} out of {quizData.length}!
                        <div className="score-percentage">
                            ({(score / quizData.length * 100).toFixed(1)}%)
                        </div>
                    </div>

                    <div className="answer-review">
                        <h3>Answer Review:</h3>
                        {userAnswers.map((answer, index) => (
                            <div 
                                key={index} 
                                className={`review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}
                            >
                                <p><strong>Q{index + 1}:</strong> {answer.question}</p>
                                <p>Your answer: {answer.selectedOption}</p>
                                {!answer.isCorrect && (
                                    <p>Correct answer: {answer.correctAnswer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <button 
                        className="restart-btn"
                        onClick={restartQuiz}
                    >
                        Take Quiz Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz1;
