import React,{useState}from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const[emailid,setEmailid] = useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(username + " "+ password);
    Axios.post(`${vercel}/users/add`,{emailid:emailid, username:username, password:password, firstname:firstname , lastname:lastname}).then(()=>alert("User Created")).catch(e=>console.log(e))
    setUsername("");
    setPassword("");
    navigate('/')
  }
  return (
    <Container>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email-ID</Form.Label>
          <Form.Control type="text" placeholder="Enter your email-id"  onChange={(e)=>setEmailid(e.target.value)} value={emailid}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="Enter username"  onChange={(e)=>setUsername(e.target.value)} value={username}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter firstname"  onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter lastname"  onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
