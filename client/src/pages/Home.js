import React from 'react'
import { useEffect, useState } from 'react';
import {getdata,remove} from '../components/functions/fxblog'
import Swal from 'sweetalert2'
import { Link,  } from 'react-router-dom';

import NavbarHome from '../layout/NavbarHome';
// import TestRedux2 from '../components/TestRedux2';
// import TestRedux1 from '../components/TestRedux1';

import { useSelector } from "react-redux";

const Home = () => {
const { user } = useSelector((state)=>({...state}))
// check ค่าก่อน
// console.log("useSelectorHOME",user.user.length)
  const [data, setData]=useState([])

  useEffect(()=>{
    loadData () 
  }, [])


// load ข้อมูลมาใช้

  const loadData = async ()=>{
   getdata()
    .then((res)=>{
      // console.log(res.data)
      setData(res.data)
      // eslint-disable-next-line
    })
    .catch((err)=>console.log(err))
  }
//delete
    const handleRemove = async(id)=>{
        console.log(id)

        //alert
        Swal.fire({
          title: 'ยืนยันการลบ?',
          text: "เนื้อหาทั้งหมดจะถูกลบออกจากระบบ",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            //ตัวลบ
            remove(id)
        .then((res)=>{
          console.log(res.data)
          loadData()
         
        })
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        
        // await axios.delete('http://localhost:5000/api/blog/'+ id)
        
        .catch(err=>console.log(err))
        
    }  

      
  return (

    

<> 
    
   {/* {user.user.length===0&&<NavbarHome/>} */}
      {/* {console.log(user.user.role)} */}

      {user.user.role==="admin"||user.user.role==='user'?"":<NavbarHome />}
    <div className="container p-1">
      
  {data.map((blog,index)=>(
    
      <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
          <div className="col pt-3 pb-2">
           
              {/* <Link to={`/blog/${blog.slug}`}> */}
              <Link to={'/blog/'+blog._id} style={{textDecoration:'none'}}>
              <h2 style={{color:"black"}}>TOPIC : {blog.title}</h2>
              <h5>{(blog.detail)}</h5>
              <p className="text-muted"> ผู้เขียน: {blog.name} , เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
             </Link >
            {user.user.role==='admin'||user.user.role==='user'? <h4 style={{color:"black"}}>สถานะ : {blog.statusform}</h4>:""}
            

             {user.user.role==="admin"?   <div>      <Link to={'/edit/'+blog._id} style={{paddingRight:"10px"}}>
             <span><button  className='btn btn-outline-primary'>Edit</button></span>  
             </Link>
              <span>
                <button  className='btn btn-outline-danger' 
              onClick={()=>handleRemove(blog._id)}>Delete </button></span>
              </div>
       :""}

          
              
                {/* <h2>{blog.title}</h2> */}
                {/* <h2> ID ={blog._id}</h2> */}
              {/* <div >{(blog.detail.substring(0,250))}</div> */}
             {/* <TestRedux1></TestRedux1>
             <TestRedux2></TestRedux2> */}
            
          </div>
      </div>
  ))}
</div>
</>
  )
}

export default Home