import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
// import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="mb-5" >
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-3" to="/home"> <span className="i-color" >i </span> learning</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/course">Top Course </NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact" > Contact me </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};



export default Header;