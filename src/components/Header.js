import React from 'react';
import './Header.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar id="navbar" variant="dark" expand="lg" className="fixed-top navbar-expand">
            <Navbar.Brand id="title">COVID-19 Herd Immunity Projections</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto" id="tabs">
                <Nav.Link>Map</Nav.Link>
                <Nav.Link>Methods</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;