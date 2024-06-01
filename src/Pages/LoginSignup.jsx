import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='logonsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="Email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>continue</button>
        <p className="loginsignup-login">Already have ab account? <span> Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms if use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
