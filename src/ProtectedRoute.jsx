import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
let accessByAdmin = ['/', '/addpatient', '/managepatient', '/addreceptionist', '/managereceptionist', '/adddoctor', '/managedoctor', '/viewappointment']
let accessByReceptionist = ['/', '/addpatient', '/managepatient', '/adddoctor', '/managedoctor', '/viewappointment']
let accessByDoctor = ['/viewappointment']
let accessByPatient = ['/bookappointment', '/viewappointment']

const ProtectedRoute = ({ component }) => {
    let route = window.location.pathname
    let navigate = useNavigate()
    let user = localStorage.getItem('role')
    let token = localStorage.getItem('token')

    if (token && user) {
        
        if (user == 'admin') {
            console.log(route);
            let check = accessByAdmin.find((ele) => ele == route)
            if (!check) {
                navigate('/')
            } else {
                return component
            }
        }
        else if (user == 'doctor') {
            console.log(route);
            let check = accessByDoctor.find((ele) => ele == route)
            if (!check) {
                navigate('/viewappointment')
            } else {
                return component
            }
        }
        else if (user == 'patient') {
            console.log(route);
            let check = accessByPatient.find((ele) => ele == route)
            if (!check) {
                navigate('/viewappointment')
            } else {
                return component
            }
        }
        else if (user == 'receptionist') {
            console.log(route);
            let check = accessByReceptionist.find((ele) => ele == route)
            if (!check) {
                navigate('/')
            } else {
                return component
            }
        }
    }


}

export default ProtectedRoute