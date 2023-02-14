import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UpdateUser from "./Components/Pages/UpdateUser";
import CreateUser from "./Components/Pages/CreateUser";
import View from './Components/Pages/View';
import Login from './Components/Login/Login';
import Forgotpassword from './Components/Login/Forgot';
import Register from './Components/Login/Register';
 
 
function App() {
  const [id,setId] = useState("");
  const getId =(id)=>{
    setId(id);
  }
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/forgot_password" element={<Forgotpassword/>}/>
        <Route path="/newuser" element={<Register/>}/>
        <Route path="/home" element={<Home getId={getId}/>}/>
        <Route path="/updateform" element={<UpdateUser id={id}/>}/>
        <Route path="/createform" element={<CreateUser/>}/>
        <Route path="/viewlist" element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;