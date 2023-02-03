import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = ({getId}) => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get(`${vercel}/users`).then((res) => setUsers(res.data));
  }, []);

  const deleteUser =(id)=>{
// console.log(id);
Axios.delete(`${vercel}/users/${id}`)
.then(()=> alert("User Deleted Successfully"))
.catch(e => console.log(e));
  }

  const updateUser =(id)=>{
    getId(id);
    navigate('/updateform')
  }
  const navigated =()=>{
    navigate('/createform')
  }
  return (
    <Container>
      <h4 className="display-3 text-center">Users-List</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td><button className="btn btn-warning" onClick={()=> updateUser(user._id)}>Update</button></td>
                <td><button className="btn btn-danger" onClick={()=> deleteUser(user._id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div className="text-center">
      <button className="btn btn-success" type="button" onClick={navigated}>Create-User</button>
      </div>
      
    </Container>
  );
};

export default Home;
