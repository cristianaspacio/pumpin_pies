/**
  Header Component which is the Navbar
**/
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      <Navbar.Brand href="/">Pumpin Pies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/workout">Workout</Nav.Link>
          <Nav.Link href="#meal">Meal</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">
            <i className="material-icons">
              account_circle
            </i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
