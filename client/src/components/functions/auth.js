import axios from "axios";

//create
    export const register = async (data) =>
    await axios.post('http://localhost:5000/api/register', data)

    //login
    export const login = async (data) =>
    await axios.post('http://localhost:5000/api/login', data)


    //token กำหนด headers
    export const currentUser = async (authtoken) =>
    await axios.post('http://localhost:5000/api/current-user',{},{
        headers:{
            authtoken
        }
    })

    export const currentAdmin = async (authtoken) =>
    await axios.post('http://localhost:5000/api/current-admin',{},{
        headers:{
            authtoken
        }
    })




