import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"
const View = () => {
    const navigate = useNavigate();
    const vercel = "https://back-end-task-leli.vercel.app";
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Axios.get(`${vercel}/users`).then((res) => setUsers(res.data));
      }, []);
      const navigated = () => {
        navigate("/");
      };
  return (
    <div>
           <Container>
            <div className="row d-3 text-center mt-2 mb-3">
                <div>  <h4 className="">--User's Data--</h4></div>
                <div> <button className="btn btn-warning mt-2 mb-3" onClick={navigated}>Back to Home</button></div>
           
    
       
       
     
      <Table striped bordered hover>
        <thead className="thead">
          <tr>
            <th>S.No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>User Name</th>
            <th>Email-ID</th>
         
          </tr>
        </thead>
        
        <tbody>
     {
            users.map((user, index) => {
              return (
               
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.emailid}</td>
                 
                </tr>
              )}
            )}
        </tbody>

 
      </Table>
      </div>
      
    </Container> 
    </div> 
  )
}

export default View