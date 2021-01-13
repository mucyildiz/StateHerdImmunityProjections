import React from 'react';
import './Footer.css';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar id="footer" variant="dark" expand="lg" className="navbar-expand">
            <div>© 2021 Alperen Yildiz</div>
        </Navbar>
    )
}

export default Footer;