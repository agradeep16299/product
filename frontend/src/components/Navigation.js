

import React, { useRef } from "react";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation() {

    const dispatch = useDispatch();
    const bellRef = useRef(null);






    return (
        <Navbar bg="dark" expand="lg" style={{ height: "200px", textAlign: 'top' }}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>product Zone</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">





                       


                            <NavLink to="/admin">
                               product crud
                            </ NavLink >

                            <NavLink to="/new-product">
                               create product
                            </ NavLink >
                            
                           





                        


                    </Nav>
                </Navbar.Collapse>
            </Container>


        </Navbar>
    );
}

export default Navigation;