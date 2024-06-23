import { toast } from "react-toastify";


export const postFetch = async (url, body) => {
   try {
    let resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    })
    let data = await resp.json()
    console.log(data);
    if(data.success){
        toast.success(data.message,{delay:1000})
        return data
    }else{
        toast.error(data.error,{delay:100})
    }
   } catch (err) {
    toast.error(err.message,{delay:1000})
   }
}