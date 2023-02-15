import React,{useState}from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastErrMsg,ToastSuccessMsg } from "../../utils/ToastMsg";
const UpdateUser = ({id}) => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  // const local = " http://localhost:8001"
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [emailid,setEmailid]= useState("");
  const updateHandler =async (id)=>{
 const response = await Axios.put(`${vercel}/users/update/${id}`,{firstname:firstname, lastname:lastname,emailid:emailid, password:password}).catch(
  (err) => {
    if (err && err.response) {
      ToastErrMsg(err.response.data);
      console.log("Error---> ", err.response.data);
    }
  }
);
if (response && response.data) {
  ToastSuccessMsg(response.data);
  console.log("Successful----> ", response.data);
}
  setFirstname("");
  setLastname("");
  setPassword("");
  setEmailid("");
  navigate('/home')
  }
  return (
    <Container>
    <Form onSubmit={(e)=>{ e.preventDefault(); updateHandler(id);}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email-id</Form.Label>
        <Form.Control type="text" placeholder="Enter Emailid"  onChange={(e)=>setEmailid(e.target.value)} value={emailid}/>
        
      </Form.Group>
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