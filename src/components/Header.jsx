import React from "react";

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container';

import "./Header.css";

function Header(props) {
    function createProjectLinks() {
        return props.projectNames.map((name, idx) => {
            console.log(name);
            return <NavDropdown.Item href={"#proj" + idx}>{name}</NavDropdown.Item>;
        })
    }

    return <Navbar expand="lg" className="header">
        <Container>
                {/* TODO: Make this an icon/logo*/}
                <Navbar.Brand href="#home">Jashan Dhilon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="mailto:jdhilondev@gmail.com">Contact</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                    {/* TODO: Make Navbar fixed to top, and make anchor tags leave padding*/}
                    {createProjectLinks()}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>;
}

export default Header;