import React, {useState, useEffect} from 'react'
import "./style2.css"

let index_ = 0
let score = 0

const Game = () => {
    const [answering, setAnswering] = useState(true);
    const [counter, setCounter] = useState(0)
    const [question_, setQuestion_] = useState(null);
    //You should add the questions like this:
    const questions = [{
        question: "the question",
        answers: [
            "answer 0",
            "answer 1",
            "answer 3"
        ],//U can add unlimited number of answers but you can only have one correct answer
        correctAnswer: 0
    }]
    const MAX = 2

    const GetQu = () => {
        setQuestion_(null)
        if(counter === MAX){
            return setQuestion_(null)
        }
        index_+=1
        setCounter(counter+1)
        setQuestion_(questions[index_-1])
        setAnswering(true)
    }

    const handleAnswer = (e) => {
        if (!answering){return}
        setAnswering(false)
        let item = e.target.dataset["number"]
        let classApply = item == question_.correctAnswer ? 'correct' : 'incorrect'
        if(classApply==="correct"){
            score++
            sessionStorage.setItem('score', score)
        }
        e.target.parentElement.classList.add(classApply)
        setTimeout(()=>{
            e.target.parentElement.classList.remove(classApply)
            GetQu()
        }, 500)
    }

    useEffect(() => {
        sessionStorage.setItem('score', 0)
        setAnswering(true)
        setCounter(0)
        GetQu()
    }, [])
    return (
        <div className="container">
            <div className="game flex-center flex-column">
            <div className="loader hidden"></div>
            <div className="hud">
                <div className="hud_item">
                    <p className="progressText hud-prefix">{counter} سؤال</p>
                    <div className="progressBar">
                        <div className="progressBarFull" style={{width: (counter/MAX)*100+'%'}}></div>
                    </div>
                </div>
            </div>
            <h2 className="question">{question_!=null ? question_.question : ""}</h2>
            {question_!=null ? question_.answers.map((answer, index)=>(
                <div key={index}>
                    <div className="choices_container">
                        <p className="choice_text" data-number={index} onClick={(e)=>handleAnswer(e)}>{answer}</p>
                    </div>
                </div>
            )) : (<h1>{sessionStorage.getItem('score')}:نتيجة</h1>)}
        </div>
        </div>
    )
}

export default Game
