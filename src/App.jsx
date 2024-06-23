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
import ProtectedRoute from './ProtectedRoute'

const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<ProtectedRoute component={<Dashboard/>}/>
      },
      {
        path:'addpatient',
        element:<ProtectedRoute component={<AddPatient heading={'Add Patient'} flag={null}/>}/>
      },
      {
        path:'adddoctor',
        element:<ProtectedRoute component={<AddDoctor heading={'Add Doctor'} flag={null}/>}/>
      },
      {
        path:'addreceptionist',
        element:<ProtectedRoute component={<AddReceptionist/>}/>
      },
      {
        path:'bookappointment',
        element:<ProtectedRoute component={<BookAppointment/>}/>
      },
      {
        path:'managepatient',
        element:<ProtectedRoute component={<ManagePatient/>}/>
      },
      {
        path:'managedoctor',
        element:<ProtectedRoute component={<ManageDoctor/>}/>
      },
      {
        path:'managereceptionist',
        element:<ProtectedRoute component={<ManageReceptionist/>}/>
      },
      {
        path:'viewappointment',
        element:<ProtectedRoute component={<ViewAppointment/>}/>
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