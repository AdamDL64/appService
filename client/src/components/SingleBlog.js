import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { read } from "./functions/fxblog"

const SingleBlog =()=>{
    const parms=useParams()
    
    const [data,setData]=useState([])
    const urlID=parms.id;
    useEffect(()=>{
            lodadata1(urlID)
            // eslint-disable-next-line
    }, [])
   const lodadata1 = async(id)=>{
         read(id)
         .then((res)=>{
            setData(res.data)
         })   
   }
    
return(<>
      <div style={{margin:"10px"}}>
          <div className="container-lg  " >
              <h1 style={{color:"black"}}>TOPIC : {data.title}</h1>
              <h3>{data.detail}</h3>
              <p className="text-muted"> ผู้เขียน: {data.name} , เผยแพร่ : {new Date(data.createdAt).toLocaleString()}</p>
          </div>
      </div>

    </>)
}
export default SingleBlog