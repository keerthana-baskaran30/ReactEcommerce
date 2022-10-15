import React from "react";
import { Navbar, NavDropdown, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
    const userInfo = 0
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {userInfo ? (
                                <NavDropdown title={userInfo} id="username">
                                    <NavDropdown.Item as = {Link} to = {"/profile"}>Profile</NavDropdown.Item>

                                    <NavDropdown.Item >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav>
                                    <Nav.Link as={Link} to={"/signup"} >Sign up</Nav.Link>
                                    <Nav.Link as={Link} to={"/signin"}> Sign in</Nav.Link>
                                </Nav>
                            )}

                            <Nav.Link as={Link} to={"/cart"}> Cart</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header