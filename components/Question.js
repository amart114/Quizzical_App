import React, {useContext} from "react"
import {Context} from "../Context"

export default function Question({question}) {
    
    return (
        <div className="single-question">
            <h3>{question}</h3>
        </div>
    )
}