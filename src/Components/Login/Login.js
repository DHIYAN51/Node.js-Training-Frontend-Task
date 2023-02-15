import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/authService";
import "../../Styles/Login/Nlogic.css";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import { ToastErrMsg } from "../../utils/ToastMsg";
import { ToastSuccessMsg } from "../../utils/ToastMsg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        (res) => {
          navigate("/home");
          window.location.reload();
          if (res && res.data) {
            ToastSuccessMsg(res.data);
            console.log("Successful----> ", res.data);
          }
        },
        (err) => {
          if (err && err.response) {
            ToastErrMsg(err.response.data)
            console.log("Error---> ", err.response.data);
          }
           
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  console.log(email, password);
  return (
    <div>
      <ToastContainer />
      <div className="center">
        <h3 className="text-center p-4">Login</h3>
        <form method="post" onSubmit={handleLogin}>
          <div className="txt_field">
            <input
              type="text"
              // placeholder="dhiyanesh@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email-ID*</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              // placeholder="Pass@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password*</label>
          </div>
          {/* <div class="pass">Forgot Password?</div> */}
          <div className="text-center">
            <Button type="submit">Login</Button>
          </div>

          <div className="signup_link">
            Not a member? <a href="/newuser">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
