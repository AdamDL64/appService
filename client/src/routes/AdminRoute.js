import React,{useEffect,useState} from 'react'
import Navbar from '../layout/Navbar'
import { useSelector } from 'react-redux'

import { currentAdmin } from '../components/functions/auth'
import Notfound404 from '../pages/Notfound404'
const AdminRoute = ({children}) => {

  const { user } =useSelector((state)=>({...state}))
  const [ok,setOk]=useState(false)
  // console.log("useSelector",user.user.role)

  useEffect(()=>{
    //ต้องไห้มันเช็คค่าก่อนไมงั้นจะerrorได้
    if(user && user.user.token){
      currentAdmin(user.user.token)
      .then((r)=>{
        // console.log(r)
        setOk(true)
      })
      .catch((err)=>{
        console.log(err)
      setOk(false)
      })
    }
  },[user])

  
  return ok ? 
    <>     
    <Navbar />
      {children}
  </>
  :<Notfound404  />
}

export default AdminRoute