import React from 'react'
import './Login.css'

function Login() {
  return (<main>
     <section className="login">
      <div className="conteyner login__wraper">
        <form className="login__form">
          <div className="login__logo">
            <img src="" alt="" className="login_logo" />
            <div className="logo__content">
              <h2 className="logo_title"></h2>
              <p className="logo_text"></p>
            </div>
          </div>
          <div className="login__content">
            <div className="login__inner">
              <label htmlFor="" className="inner_label"></label>
              <input type="text" className="inner_input" />
            </div>
            <div className="login__inner">
              <label htmlFor="" className="inner_label"></label>
              <input type="text" className="inner_input" />
            </div>
            <button className="login_btn">login for user</button>
          </div>
        </form>
      </div>
     </section>
  </main>)
}

export default Login
