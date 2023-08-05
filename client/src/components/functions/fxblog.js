import axios from "axios";


//remove 
export const remove = async (id) =>{

    return(
        await axios.delete('http://localhost:5000/api/blog/'+ id)
        )
}
//create
export const create = async (data) =>
    await axios.post('http://localhost:5000/api/blog/', data)

  //loadData ทั้งหมด
export const getdata = async () => {
    return await axios.get('http://localhost:5000/api/blog/')
}
//ตัวอย่างการเรียนใช้ แบบมี auth check token
// export const getdata = async()=>{
//     const gettk = await generteToken()
//     console.log("gettk token ", gettk)
//     return await axios.get('http://localhost:5000/api/blog/',{
//         headers:{
//             'X-firebase-AppCheck':gettk.token
//         }
//     })
// }



// หาข้อมูล1
export const read = async (id) => {
    return await axios.get('http://localhost:5000/api/blog/' + id)
}

//updata
export const update = async (id, data) => {
    return await axios.put('http://localhost:5000/api/blog/' + id, data)
}