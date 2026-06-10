import React from 'react'
import './Login.css'
import logo from "../../../public/icon/logo.png"
import userIcon from "../../../public/icon/user-icon.png"
import passwordIcon from "../../../public/icon/password-icon.png"

function Login() {
  return (<div className='body'>
    <main className='site__main'>
     <section className="login">
      <div className="conteyner login__wraper">
        <form className="login__form">
          <div className="login__logo">
            <div className="logo__background">
              <img width={90} height={90} src={logo} alt="" className="login_logo" />
            </div>
            <div className="logo__content">
              <h2 className="logo_title">O'yin Markazi</h2>
              <p className="logo_text">Tizimga kiring</p>
            </div>
          </div>
          <div className="login__content">
            <div className="login__inner">
              <label htmlFor="email" className="inner_label">email</label>
              <input id='email' type="email" className="inner_input" placeholder='user email'/>
              <img width={30} src={userIcon} className='inner_input-icon' alt="" />
            </div>
            <div className="login__inner">
              <label htmlFor="password" className="inner_label">password</label>
              <input id='password' type="password" className="inner_input" placeholder='user password'/>
              <img width={30} src={passwordIcon} className='inner_input-icon' alt="" />
            </div>
            <button className="login_btn">login for user</button>
          </div>
        </form>
      </div>
     </section>
    </main>
  </div>)
}

export default Login
