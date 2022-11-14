import { useState } from "react"
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true)
    return (

        <div>

            <h1>Auth</h1>
            {/* <SignUpForm/> */}
           
            {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser}/>}

      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Log In" : "Sign Up"}</button>

        </div>

    )
    
}

export default AuthPage