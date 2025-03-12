import React, { useState } from "react";
import quizData from './quizData';
import "./Quiz.css";

const Quiz1 = () => {
    //    let btnValue = document.querySelector("#val").value;
    const setUserAnswers = ['']
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    // const [userAnswers, setUserAnswers] = useState([]); 
    const [showScore, setShowScore] = useState(false);

    const nextBtnHandler = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const handleAnswerOptionClick = (option) => {
        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }


    quizData[currentQuestion].options.map((option, index) =>
        setUserAnswers.push(option)
    )

    function redirect() {
        window.location.href = 'http://localhost:3000/';
    }
    const checkAns = ()=>{
      
    }

    return (
        <>
            {
                showScore ? (
                    <div className="score-section"> 
                    <span id="scortext">You scored {score} out of {quizData.length}!</span>
                        {/* <p>{quizData.forEach((val ,index)=>quizData[1].question)} </p> */}
                        <button> check your answer</button>
                        <button onClick={redirect}> Try Again </button>
                    </div>) : (
                    <div className="container">
                        <h1>Quiz Test Application </h1>
                        <div className="change-container">
                            <strong className="ques-text"> Question: {currentQuestion + 1} / {quizData.length}  {quizData[currentQuestion].question}</strong>

                            {quizData[currentQuestion].options.map((option, index) => (
                                <button key={index} id="val" onClick={() => handleAnswerOptionClick(option)}>
                                    ({index + 1}) {option}
                                </button>
                            ))};
                        </div>
                        <button type="submit" className="next-btn" onClick={nextBtnHandler} >Next</button>
                    </div>
                )}
        </>

    )
}
export default Quiz1;