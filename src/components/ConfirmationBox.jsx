import React from 'react'
import Button from './common/Button'
import Popup from 'reactjs-popup'
import { getFetch } from '../config/getFetch'

const customStyle={
    width:'100%',
    'max-width':'400px'
}

const ConfirmationBox = ({ open, setConfirm,id }) => {

    const clickHandler=async()=>{
        console.log('clci');
        let data=await getFetch(import.meta.env.VITE_HOST+`/patient/deletepatient?id=${id}`)
        if(data.success){
            setConfirm(false)
        }
    }
    return (
        <Popup contentStyle={customStyle} open={open} onClose={() => setConfirm(false)}>
            <div className='w-[400px] p-3 flex flex-col rounded-md mx-auto '>
                <h2 className='text-center font-bold text-3xl'>Do you want to Delete?</h2>
                <img className='w-[60%] mx-auto' src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg" alt="" />
                <div className='flex justify-between items-center gap-x-3'>
                    <Button onClick={clickHandler} className={'bg-red-500 w-full'}>Yes</Button>
                    <Button onClick={()=>setConfirm(false)} className={'bg-green-500 w-full'}>No</Button>
                </div>
            </div>
        </Popup>
    )
}

export default ConfirmationBox