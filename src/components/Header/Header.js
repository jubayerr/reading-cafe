import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    const { name } = props.loggedInUser
    return (
        <div className="header">

            <Navbar bg="light" expand="lg">
                <Link className="navbar-brand" to="/">The Reading Cafe</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/checkout">Checkout</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/login">{name}</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;