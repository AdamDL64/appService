import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { read,update } from './functions/fxblog'

import Swal from 'sweetalert2'

const EditBlog = () => {

  const params = useParams()
  const navigate = useNavigate()


  const [data, setData] = useState({
      title: '',
      detail:'',
      name: ''
  })
  const {name} = data //defactory ออกมาใช้ก็ได้ไมต้องใช้ data.name
// const [data, setData]=useState([])

  useEffect(() => {
      loadData(params.id)
      // eslint-disable-next-line
  }, [])

  const loadData = async (id)=>{
    // await axios.get('http://localhost:5000/api/blog/' + id)
    read(id)
     .then((res)=>{
       console.log(res.data)
       setData(res.data)
       // eslint-disable-next-line
     })
     .catch((err)=>console.log(err))
   }
 
  const handleChange = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
  }
  const handleSubmit = async (e) => {
      e.preventDefault()

      Swal.fire({
        title: 'ต้องการบันทึกการแก้ไข',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

             update(params.id, data)
          .then(res => {
            //   console.log(res)
          
              navigate('/next')
          })
          .catch((err) => console.log(err))

          Swal.fire('บันทึกการแก้ไข!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('ท่านยังไมได้ทำการบันทึก', '', 'info')
        }
      })

      console.log(data)


     
     
  }
  

  return (
    <div className="container p-5">
           
            <h1>แก้ไขบทความ</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control" 
                        name='title'
                        value={data.title}
                       
                        onChange={e=>handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <textarea className="form-control" rows="3"
                        name='detail'
                        onChange={e=>handleChange(e)}
                        value={data.detail}
                      
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>ผู้แต่ง</label>
                    <input type="text" className="form-control" 
                    name='name'
                    onChange={e=>handleChange(e)}
                    value={name}
                    />
                </div>
                
                <div className="form-group">
                    <label>สถานนะ</label>
                    <input type="text" className="form-control" 
                        name='statusform'
                        value={data.statusform}
                        onChange={e=>handleChange(e)}
                    />
                </div>
                <br/>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
  )
}

export default EditBlog