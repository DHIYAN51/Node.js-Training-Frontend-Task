import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { MDBBtn, MDBTable, MDBTableHead } from "mdb-react-ui-kit";
import Navigation from "./Navbar";
// import ErrorAnimation from "../utils/Nofound";
const Home = ({ getId }) => {
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(`${vercel}/users`).then((res) => setUsers(res.data));
  }, []);

  const deleteUser = (id) => {
    // console.log(id);
    Axios.delete(`${vercel}/users/${id}`)
      .then(() => alert("User Deleted Successfully"))
      .catch((e) => console.log(e));
  };

  const updateUser = (id) => {
    getId(id);
    navigate("/updateform");
  };
  const navigated = () => {
    navigate("/createform");
  };
  const navitoview = () => {
    navigate("/viewlist");
  };
  console.log(
    users.filter((user) => user.firstname.toLowerCase().includes("KAN"))
  );
  return (
    <div>
      <Navigation />

      <Container>
        <div className="row p-5 mx-auto my-auto">
          <h2 className="text-center">Users-List</h2>

          <form
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",
            }}
            className="d-flex input-group w-auto"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <MDBBtn
              className="mx-2"
              color="success"
              type="button"
              onClick={navigated}
            >
              Create user
            </MDBBtn>
            <MDBBtn className="mx-2" color="warning" onClick={navitoview}>
              View
            </MDBBtn>
          </form>
        </div>

        <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th>S.No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>User Name</th>
              <th>Email-ID</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </MDBTableHead>

          <tbody>
            {search.length === 0 ? (
              <tr>
                <td colspan={8} className="text-center mb-o">
                  No Data Found
                </td>
              </tr>
            ) : (
              users
                .filter(
                  (user) =>
                    user.emailid.toLowerCase().includes(search) ||
                    user.firstname.toLowerCase().includes(search) ||
                    user.lastname.toLowerCase().includes(search) ||
                    user.username.toLowerCase().includes(search)
                )
                .map((user, index) => {
                  return (
                    // user.search.toLowerCase().includes(search.toLowerCase()) ? user.search : " " &&
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.username}</td>
                      <td>{user.emailid}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => updateUser(user._id)}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </MDBTable>
      </Container>
    </div>
  );
};

export default Home;
