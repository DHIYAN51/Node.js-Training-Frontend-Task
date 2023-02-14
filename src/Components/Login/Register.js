import React, { useState } from "react";
import AuthService from "../../Services/authService";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login/Register.css";
import Button from "react-bootstrap/Button";
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
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
   
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
  );
};

export default Register;
