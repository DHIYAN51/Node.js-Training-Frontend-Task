import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Node.js Training</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            my-2
            my-lg-0
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/createform">CreateUser</Nav.Link>
            <Nav.Link href="/updateform">UpdateUser</Nav.Link>
            <Nav.Link href="/viewlist">Viewlist</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/newuser">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Logout
            </Nav.Link>
          </Nav>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
