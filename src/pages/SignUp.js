import React, { useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

import "../styles.css";

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
  
    // Get signUp function from the auth context
    const { signUp } = useAuth()

    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        // Get email and password input values
        const email = emailRef.current.value
        const password = passwordRef.current.value

        // Calls `signUp` function from the context
        const { error } = await signUp({ email, password })

        if (error) {
            alert('error signing in')
            } else {
            // Redirect user to Dashboard
            history('/');
        }
    }
  
    return (
      <div className="contentContainer">
        <div className="authContainer">
            <h2> Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="input-email">Email</label>
            <input id="input-email" type="email" ref={emailRef} />

            <br />
            <br />
    
            <label htmlFor="input-password">Password</label>
            <input id="input-password" type="password" ref={passwordRef} />
    
            <br />
            <br />
    
            <button type="submit">Sign up</button>
            </form>

            <p>
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </div>
      </div>
    )
}

export default SignUp;