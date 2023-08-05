import EditBlog from "./components/EditBlog";
import FormBlog from "./components/FormBlog";
import SingleBlog from "./components/SingleBlog";
// import HeaderBar from "./layout/HeaderBar";
import { BrowserRouter, } from "react-router-dom";


import Home from "./pages/Home";

import { Route, Routes } from 'react-router-dom'
import Register from "./pages/auth/Register";

import Login from "./pages/auth/Login";

import HomePageAdmin from "./pages/admin/HomePageAdmin";
import HomePageUser from "./pages/user/HomePageUser";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";


//fuctions
import { currentUser } from "./components/functions/auth";
import { login } from "./store/userSlice";
import { useDispatch } from "react-redux";
import Notfound404 from "./pages/Notfound404";
import RegisterAdmin from "./pages/auth/RegisterAdmin";



function App() {
 
const dispatch =useDispatch()

const idToken =localStorage.getItem('token')
 //ส่ง tokenติดต่อหลังบ้าน
currentUser(idToken)
.then((res)=>{
console.log(res)
  dispatch(
    login({
      naem: res.data.name,
      role: res.data.role,
      token: idToken
    })
  );
})
.catch(err=>console.log(err))

// console.log('ID TOKEN',idToken)
  return (
    <BrowserRouter>
      
        <Routes >

        <Route path="*" element={<Notfound404 />} />
          <Route path="/register/" element={<Register />}/>
          <Route path="/registerAdmin/" element={<RegisterAdmin />}/>
          <Route path="/login/" element={<Login />} />
          <Route path="/" element={ <Home /> }/>

          {/* user */}

          <Route path="/next/" element={
     <UserRoute>
        <Home />
      </UserRoute>
        }/>
           
          <Route path="/user/index" element={<UserRoute><HomePageUser /></UserRoute>} />
          <Route path="/h1/" element={<><h1>sdfsdfsdf</h1></>} />
          <Route path="/edit/:id" element={<UserRoute><EditBlog /></UserRoute>} />
      <Route path="/blog/:id" element={<UserRoute><SingleBlog /></UserRoute>} />
      <Route path="/create/" element={<UserRoute><FormBlog /></UserRoute>} />

        {/* admin */}
     
     <Route path="/next/" element={
     <AdminRoute>
        <Home />
      </AdminRoute>
        }/>
      <Route path="/edit/:id" element={<AdminRoute><EditBlog /></AdminRoute>} />
      <Route path="/blog/:id" element={<AdminRoute><SingleBlog /></AdminRoute>} />
      <Route path="/create/" element={<AdminRoute><FormBlog /></AdminRoute>} />
      <Route path="/admin/index" element={<AdminRoute><HomePageAdmin /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
