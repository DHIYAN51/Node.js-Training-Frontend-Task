// import React,{useState} from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from '../Pages/Home';
// import UpdateUser from '../Pages/UpdateUser';
// import CreateUser from '../Pages/CreateUser';
// import Navigation from "../Components/Navbar";
// import View from '../Pages/View';
// function Main (){
//     const [id,setId] = useState("");
//     const getId =(id)=>{
//       setId(id);
//     }
//     return (
//       <BrowserRouter>
//       <Navigation/>
//         <Routes>
//           <Route path="/" element={<Home getId={getId}/>}/>
//           <Route path="/updateform" element={<UpdateUser id={id}/>}/>
//           <Route path="/createform" element={<CreateUser/>}/>
//           <Route path="/viewlist" element={<View/>}/>
//         </Routes>
//       </BrowserRouter>
//     );
// }

// export default Main;