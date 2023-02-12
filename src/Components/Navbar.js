import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Node.js Training</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/createform">CreateUser</Nav.Link>
          <Nav.Link href="/updateform">UpdateUser</Nav.Link>
          <Nav.Link href="/viewlist">Viewlist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
