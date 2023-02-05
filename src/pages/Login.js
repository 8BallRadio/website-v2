import React, { useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

import "../styles.css";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
  
    // Get signUp function from the auth context
    const { signInWithPassword } = useAuth()

    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        // Get email and password input values
        const email = emailRef.current.value
        const password = passwordRef.current.value

        // Calls `signIn` function from the context
        const { error } = await signInWithPassword({ email, password })

        if (error) {
            alert('error signing in')
        } else {
            // Redirect user to Dashboard
            history('/dashboard');
        }
    }
  
    return (
        <div className="authContainer">
            <h2> Login </h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="input-email">Email</label>
            <input id="input-email" type="email" ref={emailRef} />
    
            <br/ >
            <br/ >

            <label htmlFor="input-password">Password</label>
            <input id="input-password" type="password" ref={passwordRef} />
    
            <br />
    
            <button type="submit">Login</button>
            </form>

            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    )

}

export default Login;