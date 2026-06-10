import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import logo from "../../../public/icon/logo.png"
import userIcon from "../../../public/icon/user-icon.png"
import passwordIcon from "../../../public/icon/password-icon.png"
import { useAuthorization } from '../../hooks/useAuthorization'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState(false)
  const elEmailInput = useRef(null)
  const elPasswordInput = useRef(null)
  const token = localStorage.getItem("token")
  const localId = localStorage.getItem("localId")
  const navigate = useNavigate("")

  async function navigateLayout(){
    if(!token || !localId) return;

    try{
      const res = await axios.get(`https://o-yingoh-40388-default-rtdb.firebaseio.com/profile/${localId}.json?auth=${token}`)

      switch(res.data.role){
        case "worker": 
          navigate("/layout-worker")
          break;
        case "admin":
          navigate("/layout-admin")
          break;
      }

    }catch(err){
      console.log(err.message)
    }
  }
  useEffect(() => {
    navigateLayout()
  },[login])

  return (<div className='body'>
    <main className='site__main'>
     <section className="login">
      <div className="conteyner login__wraper">
        <form onSubmit={(evt) => {
          evt.preventDefault()
          useAuthorization(elEmailInput.current.value, elPasswordInput.current.value, setLoading, setLogin)
        }} className="login__form">
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
              <input id='email' type="email" className="inner_input" placeholder='user email' ref={elEmailInput}/>
              <img width={30} src={userIcon} className='inner_input-icon' alt="" />
            </div>
            <div className="login__inner">
              <label htmlFor="password" className="inner_label">password</label>
              <input id='password' type="password" className="inner_input" placeholder='user password' ref={elPasswordInput}/>
              <img width={30} src={passwordIcon} className='inner_input-icon' alt="" />
            </div>
            <button className="login_btn">{loading? <div className='loading'></div> :"login for user"}</button>
          </div>
        </form>
      </div>
     </section>
    </main>
  </div>)
}

export default Login
