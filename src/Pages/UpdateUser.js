import React,{useState}from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const UpdateUser = ({id}) => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const updateHandler =(id)=>{
  Axios.put(`${vercel}/users/update/${id}`,{username:username, password:password}).then(()=>alert("user updated")).catch(e=>console.log(e))
  setUsername("");
  setPassword("");
  navigate('/')
  }
  return (
    <Container>
    <Form onSubmit={(e)=>{ e.preventDefault(); updateHandler(id);}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={(e)=>setUsername(e.target.value)} value={username}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default UpdateUser