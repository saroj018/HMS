import { toast } from "react-toastify";


export const getFetch = async (url) => {
   try {
    let resp = await fetch(url,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
    })
    let data = await resp.json()
    console.log(data);
    if(data.success){
        // toast.success(data.message,{delay:1000})
        return data
    }else{
        toast.error(data.error,{delay:100})
    }
   } catch (err) {
    toast.error(err.message,{delay:1000})
   }
}