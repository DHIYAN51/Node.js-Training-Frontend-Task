import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/authService";
import "../../Styles/Login/Nlogic.css"
import Button from "react-bootstrap/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
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
console.log(email,password)
  return (
    <div className="center">
        <h3 className="text-center p-4">Login</h3>
      <form method="post" onSubmit={handleLogin}>
        <div className="txt_field">
        <input
          type="text"
         placeholder="dhiyanesh@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span></span>
        <label>Email-ID</label>
        </div>
        <div className="txt_field">
        <input
          type="password"
           placeholder="Pass@123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <span></span>
        <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <div className="text-center">
        <Button type="submit" >Login</Button>
        </div>
        
        <div className="signup_link">
            Not a member? <a href="/newuser">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Login;