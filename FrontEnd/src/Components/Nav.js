import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>News Of The Day</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home Page</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
