import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FormBlog = (  ) => {


        
    const [form,setForm]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
        // eslint-disable-next-line
    }, [])

    const handleChang =(e) => {
        // console.log("from Name",e.target.name,e.target.value)
            setForm({
                ...form,
                [e.target.name]:e.target.value,
                
            })
            
    }

    const handleSubmit =async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/api/blog/', form)
        .then((res)=>{
            console.log(res.data)
            alert('บันทึกเรียนร้อย')
        })
        .catch(err=>console.log(err))
        navigate('/next')
    }

  return (
    <div className="container p-5">
           
            <h1>เขียนบทความ</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control" 
                        name='title'
                        placeholder='TopPic'
                        onChange={handleChang}
                    />
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <textarea className="form-control" rows="3"
                        name='detail'
                        placeholder='descriptions'
                        onChange={handleChang}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>ผู้แต่ง</label>
                    <input type="text" className="form-control" 
                    name='name'
                    placeholder='by name'
                    onChange={handleChang}
                    />
                </div>
                <br/>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
  )
  
}

export default FormBlog