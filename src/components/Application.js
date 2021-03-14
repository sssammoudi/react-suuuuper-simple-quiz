import React from 'react'
import SignIn from "./SignIn"
import Game from "./Game"
import { Router } from "@reach/router";

const Application = () => {
    return (
        <div>
            <Router>
                <SignIn path="/" />
                <Game path="iffhjiufghfgrezgufr" />
            </Router>
        </div>
    )
}

export default Application
