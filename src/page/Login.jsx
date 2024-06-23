import React, { useEffect, useState } from 'react'
import HeadingTypo from '../components/common/HeadingTypo'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { postFetch } from '../config/postFetch'
import { useNavigate } from 'react-router-dom'

const btnOption = [
    {
        name: 'Admin',
        value: 'admin'
    },
    {
        name: 'Doctor',
        value: 'doctor'
    },
    {
        name: 'Receptionist',
        value: 'receptionist'
    },
    {
        name: 'Patient',
        value: 'patient'
    },
]

const Login = () => {
    const [loginFrom, setLoginFrom] = useState('admin')
    let route = window.location.pathname
    let user = localStorage.getItem('role')
    console.log(user);
    let token = localStorage.getItem('token')
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [signUp, setSignUp] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if (user && token) {
            if(route=='/login'){
                if(user=='doctor'|| user=='patient'){
                    navigate('/viewappointment')
                }else{
                    navigate('/')
                }
            }
        }
        return () => null
    }, [route])
    const changeHandler = (e) => {
        setLogin((prv) => ({
            ...prv,
            [e.target.name]: e.target.value
        }))
    }

    const loginHandler = async () => {
        let data = await postFetch(import.meta.env.VITE_HOST + `/${loginFrom}/login`, login)
        console.log(data);
        if (data.success) {
            if (data.role === 'receptionist' || data.role=== 'admin') {
                navigate('/')
            } else {
                navigate('/viewappointment')
            }
        }
    }

    const adminHandler = async () => {
        let data = await postFetch(import.meta.env.VITE_HOST + '/admin/signup', login)
        console.log(data);
    }
    return (
        <div className='border-2 border-gray-500 rounded-md p-3 w-full max-w-[500px] mx-auto mt-[10%]'>
            <HeadingTypo className='text-center'>Login Page</HeadingTypo>
            <div className='flex items-center gap-x-2 my-4 '>
                {
                    btnOption.map((ele, index) => {
                        return <Button key={index} onClick={() => setLoginFrom(ele.value)} className={` px-3 grow ${loginFrom == ele.value ? 'bg-black text-white' : 'bg-green-500 text-white'}`}>{ele.name}</Button>

                    })
                }
            </div>
            <div>
                <Input value={login.email} name={'email'} onChange={changeHandler} placeholder={'enter your email'} label={'Email'} />
                <Input value={login.password} name={'password'} onChange={changeHandler} placeholder={'enter your password'} label={'Password'} />
                {(loginFrom == 'admin' && !signUp) && <p onClick={() => setSignUp(true)} className='my-3 text-blue-500 cursor-pointer'>Sign Up now</p>}
                {(loginFrom == 'admin' && signUp) && <p onClick={() => setSignUp(!signUp)} className='my-3 text-blue-500 cursor-pointer'>Login now</p>}
                {!signUp && <Button onClick={loginHandler} className={'bg-blue-500 text-white w-full'}>Login</Button>}
                {signUp && <Button onClick={adminHandler} className={'bg-blue-500 text-white w-full'}>SignUp for Admin</Button>}
            </div>
        </div>
    )
}

export default Login