import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../contexts/Auth'

import '../../styles.css'
import Logo from '../../assets/logo.png'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  // const otpEmailRef = useRef()

  // const [sendingOtp, setSendingOtp] = useState(false)

  // Get signUp function from the auth context
  const { signIn } = useAuth()

  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
      console.log(error)
    } else {
      // Redirect user to Dashboard
      history('/dashboard')
    }
  }

  // Pausing Otp until we figure out how to prevent new users from using it
  // async function handleSubmitOtp(e) {
  //     e.preventDefault();

  //     console.log("Handling submit");

  //     let { data, status } = await supabase.from('profiles');

  //     console.log(data);
  //     console.log(status);

  //     setSendingOtp(true);
  //     // Get email input values
  //     const otpEmail = otpEmailRef.current.value;

  //     // Calls `signIn` function from the context
  //     const { error } = await signInWithOtp({otpEmail});

  //     if (error) {
  //         alert('error signing in');
  //         console.log(error);
  //     }
  // }

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* <div className="content-header">Login</div> */}

      <form
        onSubmit={handleSubmit}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          src={Logo}
          style={{
            paddingBottom: '35px',
          }}
        />

        {/* <label htmlFor="input-email">Email</label> */}
        <br />
        <input
          id="input-email"
          type="email"
          placeholder="enter email"
          ref={emailRef}
          style={{
            boxShadow: '0px 0px 10px 3px rgb(0 0 0 / 0.2)',
            border: '#f0f2f5',
            borderRadius: '2px',
          }}
        />
        <br />
        {/* <label htmlFor="input-password">Password</label> */}
        <br />
        <input
          id="input-password"
          type="password"
          placeholder="password"
          ref={passwordRef}
          style={{
            boxShadow: '0px 0px 10px 3px rgb(0 0 0 / 0.2)',
            border: '#f0f2f5',
            borderRadius: '2px',
          }}
        />
        <br />
        <br />
        <div className="forgot-password">Forgot password</div>
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
      {/* {sendingOtp
                ? <p>Sending Magic Link to account if it exists</p>
                : <form onSubmit={handleSubmitOtp}>
                    <label htmlFor="input-otp-email">Email</label>
                    <br />
                    <input id="input-otp-email" type="otp-email" ref={otpEmailRef} />
                    <br />
                    <br />
                    <button type="submit">Send OTP Link</button>
                    </form>} */}
    </div>
  )
}

export default Login

// TODO: Add alerts to inform user of wrong info
