import React,{useState}from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const UpdateUser = ({id}) => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const updateHandler =(id)=>{
  Axios.put(`${vercel}/users/update/${id}`,{firstname:firstname, lastname:lastname,  password:password}).then(()=>alert("user updated")).catch(e=>console.log(e))
  setFirstname("");
  setLastname("");
  setPassword("");
  navigate('/')
  }
  return (
    <Container>
    <Form onSubmit={(e)=>{ e.preventDefault(); updateHandler(id);}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter firstname"  onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname"  onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
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