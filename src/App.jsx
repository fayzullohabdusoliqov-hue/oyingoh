import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import LayoutAdmin from './pages/Layout/LayoutAdmin'
import LayoutWorker from './pages/Layout/LayoutWorker'
import DashboardAdmin from './pages/Home/DashboardAdmin'
import DashboardWorker from './pages/Home/DashboardWorker'
import Statistics from './pages/Statistics/Statistics'
import HistoryAdmin from './pages/History/HistoryAdmin'
import HistoryWorker from './pages/History/HistoryWorker'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login"/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "layout-admin",
      element: <LayoutAdmin/>,
      children: [
        {
          index: true,
          element: <Navigate to="dashboard"/>
        },
        {
          path: "dashboard",
          element: <DashboardAdmin/>
        },
        {
          path: "statistics",
          element: <Statistics/>
        },
        {
          path: "history",
          element: <HistoryAdmin/>
        }
      ]
    },
    {
      path: "layout-worker",
      element: <LayoutWorker/>,
      children: [
        {
          index: true,
          element: <Navigate to="dashboard"/>
        },
        {
          path: "dashboard",
          element: <DashboardWorker/>
        },
        {
          path: "history",
          element: <HistoryWorker/>
        }
      ]
    }
  ])
  return (<div className='light'>
    <RouterProvider router={router}/>
  </div>)
}

export default App
