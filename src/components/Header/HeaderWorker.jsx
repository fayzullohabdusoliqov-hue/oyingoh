import React from 'react'
import logo from "../../../public/icon/logo.png"
import "./HeaderWorker.css"
import { useNavigate } from 'react-router-dom'

function HeaderWorker({setOpenSidebar}) {
  const navigate = useNavigate("")

  return (
    <header className='site__header'>
      <div className="conteyner header__wraper">
        <div className="header__logo">
          <img width={90} height={90} src={logo} alt="" className="header_logo" />
          <div className="logo__content">
            <h3 className="header_title">O'yin Markazi</h3>
            <p className="header_text">Filial 1</p>
          </div>
        </div>
        <form className="header__form">
          <select className="header_select-form">
            <option value={""}>O'yin tanlang</option>
          </select>
          <select className="header_select-form">
            <option value={""}>Pul summasi</option>
          </select>
          <input type="text" className="header_input-form" placeholder='Mijoz ismi va familiyasi'/>
          <button className="header_btn-form">+ Qo'shish</button>
        </form>
        <div className="header__btn">
          <button className="header_btn">filiallar</button>
          <button className="header_btn" onClick={(evt) => {
            evt.preventDefault()
            setOpenSidebar(false)
          }}>Sidebar</button>
          <button className="header_btn">Mode</button>
          <button className="header_btn" onClick={(evt) => {
            evt.preventDefault()
            localStorage.removeItem("token")
            localStorage.removeItem("localId")
            navigate("/login")
          }}>Login</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderWorker
