import React from "react";

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container';


function Header() {
    return <Navbar bg="light" expand="lg">
        <Container>
                {/* TODO: Make this an icon/logo*/}
                <Navbar.Brand href="#home">Jashan Dhilon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                    {/* TODO: Add in a function to automatically generate these*/}
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>;
}

export default Header;