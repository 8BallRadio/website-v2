import React, { useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/Auth';

import "../../styles.css";

const SetPassword = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const nameRef = useRef()
    const history = useNavigate();

  
    // Get signUp function from the auth context
    const { user, signUp } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        // Get name and password input values
        const email = user.email;
        const password = passwordRef.current.value;
        // const name = nameRef.current.value;

        // Calls `update` function from the context
        const { data, error } = await signUp({ email, password });

        if (error) {
            alert('error signing in')
            } else {
            // Redirect user to Dashboard to update misc info
            history('/dashboard');
        }
    }
  
    // TODO: Add error/alert on bad user signup

    return (
      <div className="contentContainer">
        <div className="authContainer">
            <h2>Set Your Password</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="input-email">Email: {user?.email} </label>
            <p id="input-email" type="email" ref={emailRef} /> <p></p>

            <br />
            <br />

            {/* <label htmlFor="input-name">username: </label>
            <input id= "input-name" type="username" ref={nameRef} /> */}
    
            <label htmlFor="input-password">Password: </label>
            <input id="input-password" type="password" ref={passwordRef} />
    
            <br />
            <br />
    
            <button type="submit">Set Password</button>
            </form>
        </div>
      </div>
    )
}

export default SetPassword;