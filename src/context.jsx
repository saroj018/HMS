import { createContext, useState } from "react";

const contextProvider=createContext(null)

export const Context=({children})=>{
    const[refresh,setRefresh]=useState(false)
    return <contextProvider.Provider value={{setRefresh,refresh}}>{children}</contextProvider.Provider>
}