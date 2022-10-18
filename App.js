import React from "react"
import {Switch, Route} from "react-router-dom"

import Start from "./pages/Start"
import Quiz from "./pages/Quiz"


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                
                <Route path="/quiz">
                    <Quiz />
                </Route>
            </Switch>
        </div>
    )
}

export default App