import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UpdateUser from "./Pages/UpdateUser";
import CreateUser from "./Pages/CreateUser";
import Navigation from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/updateform" element={<UpdateUser/>}/>
        <Route path="/createform" element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
