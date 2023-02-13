import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead } from "mdb-react-ui-kit";
import Navigation from "./Navbar";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
const View = () => {
  // const pagination = paginationFactory({
  //   page:1,
  //   sizePerPage:5,
  //   lastPageText:'>>',
  //   firstPageText:"<<",
  //   nextPageText:">",
  //   prePageText:"<",
  //   showTotal:"true",
  //   alwaysShowAllBtns:true,
  //   onPageChange:function(page,sizePerPage){
  //     console.log("page",page);
  //     console.log("sizePerPage",sizePerPage);
  //   },
  //   onSizePerPageChange:function(page,sizePerPage){
  //     console.log("page",page);
  //     console.log("sizePerPage",sizePerPage);
  //   }
  // })
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Viewer();
  });

  const Viewer = async () => {
    return await Axios.get(`${vercel}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const navigated = () => {
    navigate("/home");
  };

  return (
    <div>
      <Navigation/>
      <Container>
        <div className="row d-3 text-center mt-2 mb-3">
          <div>
            {" "}
            <h4 className="">--User's Data--</h4>
          </div>
          <div>
            {" "}
            <MDBBtn className="btn btn-warning mt-2 mb-3" onClick={navigated}>
              Back to Home
            </MDBBtn>
          </div>

          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th>S.No</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>User Name</th>
                <th>Email-ID</th>
              </tr>
            </MDBTableHead>

            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.emailid}</td>
                  </tr>
                );
              })}
            </tbody>
          </MDBTable>
         
        </div>
      </Container>
    </div>
  );
};

export default View;
