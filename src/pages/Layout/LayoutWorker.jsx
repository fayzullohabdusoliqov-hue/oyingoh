import React, { useState } from 'react'
import HeaderWorker from '../../components/Header/HeaderWorker'
import { Outlet } from 'react-router-dom'
import SidebarWorker from '../../components/Sidebar/SidebarWorker'

function LayoutWorker() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (<div className='body'>
     <HeaderWorker setOpenSidebar={setOpenSidebar}/>
     {openSidebar? <SidebarWorker/> : <></>}
     <Outlet/>
  </div>)
}

export default LayoutWorker
