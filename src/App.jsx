import React from 'react'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import AddPatient from './page/add/AddPatient'
import AddDoctor from './page/add/AddDoctor'
import AddReceptionist from './page/add/AddReceptionist'
import BookAppointment from './page/BookAppointment'
import ManagePatient from './page/manage/ManagePatient'
import 'reactjs-popup/dist/index.css';
import ManageDoctor from './page/manage/ManageDoctor'
import ManageReceptionist from './page/manage/ManageReceptionist'
import ViewAppointment from './page/ViewAppointment'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Login'

const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'addpatient',
        element:<AddPatient heading={'Add Patient'} flag={null}/>
      },
      {
        path:'adddoctor',
        element:<AddDoctor heading={'Add Doctor'} flag={null}/>
      },
      {
        path:'addreceptionist',
        element:<AddReceptionist/>
      },
      {
        path:'bookappointment',
        element:<BookAppointment/>
      },
      {
        path:'managepatient',
        element:<ManagePatient/>
      },
      {
        path:'managedoctor',
        element:<ManageDoctor/>
      },
      {
        path:'managereceptionist',
        element:<ManageReceptionist/>
      },
      {
        path:'viewappointment',
        element:<ViewAppointment/>
      },
    ]
  },{
    path:'/login',
    element:<Login/>
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={route}/>
    <ToastContainer/>
    </>
  )
}

export default App