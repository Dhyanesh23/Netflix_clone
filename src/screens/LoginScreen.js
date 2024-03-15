import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';


function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img className='loginscreen__logo'
             src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" />
             
             <button onClick={() =>setSignIn(true)} className='loginScreen__button'>Sign In</button>

             <div className="LoginScreen__gradient"/>
        </div>

        <div className="loginScreen__body">
             {signIn ? (
              <SignupScreen/>
             ):(
              <>
             <h1>Unlimitied films, TV programmes and more.</h1>
             <h2>Watch anywhare. Cancel at any time.</h2>

             <h3>Ready to Watch? Enter youe email to created or restart your membership</h3>

             <div className="loginScreen__input">
              <form>
                <input type="email"
                placeholder='Email Adress' />
                <button
                 onClick={() => setSignIn(true)}
                 className='loginScreen__getStarted'>GET STARTED</button>
              </form>
             </div>
            </>
             )}
            
        </div>

    </div>
  )
}

export default LoginScreen