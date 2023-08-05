
import { useSelector } from "react-redux"
import Navbar from "../layout/Navbar"
import { useEffect } from "react"
import Notfound404 from "../pages/Notfound404"
const UserRoute = ({children}) => {
  const {user} = useSelector((state)=>({...state}))
  // console.log("Userredux",user)

  useEffect(()=>{

  },[user])
  return user && user.user.token ?<>
  <Navbar />
  {children}
  </>
    :<Notfound404 />
}

export default UserRoute