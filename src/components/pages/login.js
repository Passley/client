import React from 'react'
import './login.css';
import password_icon from '../images/password.png';
import user_icon from '../images/person.png';

export const login = () => {
  const colorBack1 = '#132A1F';
  const colorBack2 = '#337153';
  
  return (
        <div className='container'>
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Benutzername' required />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Passwort' required />
            </div>
          </div>
          <div className="forgot-password">Passwort vergessen? <span>Hier klicken!</span></div>
          <div className="submit-container">
            <div className="submit" onClick={() => { } }>Login</div>
          </div>
        </div>
  )
}

export default login;
