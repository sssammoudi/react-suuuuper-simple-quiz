import React, {useState} from 'react'
import "./style.css"
import {Link} from "@reach/router"

const SignIn = () => {
    const [user_, setUser] = useState(null);
    const openGame = () => {
        if(user_!=null || user_===""){
          sessionStorage.setItem("user", user_)
          console.log(sessionStorage.getItem("user"))
          window.location.assign("iffhjiufghfgrezgufr")
        } else {
          setUser(alert('Enter your username please'))
        }
    }
    const handleChange = (e) => {
      const { value } = e.currentTarget;
      setUser(value)
    }
    return (
      <div className="container">
        <form>
          <input type="text" name="username" placeholder="username" onChange={(e) => handleChange(e)}/>
        </form>
        <div className="flex-center flex-column">
          <h1>Quiz</h1>
          <button className="btn" onClick={()=>{openGame()}}>Start</button>
        </div>
      </div>
    )
}

export default SignIn
