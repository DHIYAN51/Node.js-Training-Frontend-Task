import React, { useState } from "react";
import AuthService from "../../Services/authService";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login/Register.css";
import Button from "react-bootstrap/Button";
import { ToastErrMsg } from "../../utils/ToastMsg";
import { ToastContainer } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email,password,name,confirmpassword).then(
        (response) => {
          // check for token and user already exists with 200
          console.log("Sign up successfully", response);
          navigate("/home");
          window.location.reload();
        },
        (err) => {
          if (err && err.response) {
            ToastErrMsg(err.response.data);
            console.log("Error---> ", err.response.data);
          }
           
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <div>
     <ToastContainer />
     <div className="center">
      <h3 className="text-center p-4">Register</h3>
      <form method="post" onSubmit={handleSignup}>
        <div className="txt_field">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email-ID*</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span></span>
          <label>Name*</label>
        </div>

        <div className="txt_field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password*</label>
        </div>

        <div className="txt_field">
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span></span>
          <label>Confirm Password*</label>
        </div>

        <div className="text-center p-4">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
   </div>
  
  );
};

export default Register;



 