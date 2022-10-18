import React, {useContext} from "react"
import {Context} from "../Context"




export default function Answers({possibleAnswers, selectedAnswer, correctAnswer}) {
    const {decodeHtml, toggleSelectedAnswer, gameOn} = useContext(Context)
    
    return possibleAnswers.map(answer => {
        
        function styleGenerator() {
            if (!gameOn) {
                return selectedAnswer === correctAnswer ? 
                selectedAnswer === answer ? {backgroundColor: "green"} : null :
                selectedAnswer === answer ? {backgroundColor: "red"} : null
            } else if (selectedAnswer === answer) {
                return {backgroundColor: "#D6DBF5"}
            } else {
                return null
            }
        }
        
        return (
            <div 
            className="single-answer"
            style = {styleGenerator()}
            onClick={() => toggleSelectedAnswer(answer)}
            >
                {decodeHtml(answer)}
            </div>
        )
    })
    
}

// {selectedAnswer === answer ? {backgroundColor: "#D6DBF5"} : null}