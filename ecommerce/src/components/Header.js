import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/action/actions";
import ProductList from "pages/ProductList";
import { categories } from "data";

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [searchField, setSearchField] = useState("");
    // const [searchShow, setSearchShow] = useState(false);
    const [isloggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState("customer")


    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('email')) {
            if (localStorage.getItem('role') === "customer") {
                setLoggedIn(true)
            } else {
                setLoggedIn(true)
                setUser("seller")
            }
        }
    }, [])

    const onHandleLogout = (event) => {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("role")
        dispatch(logoutUser())
        setLoggedIn(false)
        alert("logged out")
        navigate("/")
    }

    const searchOnChange = (event) => {
        setSearchField(event.target.value);
        // if (event.target.value === "") {
        //     setSearchShow(false);
        // }
        // else {
        //     setSearchShow(true);
        // }
    }

    // function searchList() {
    //     if (searchShow) {
    //         return (
    //             <>
    //                 <p>searching...</p>
    //             <ProductList search={searchField} />
    //             </>
                
    //         );
    //     }
    // }
    const onSubmitSearch = () => {
        navigate(`/searchProducts/${searchField}`)
        // if (searchShow) {
        //     navigate("/searchProducts")
        // }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {user === 'customer' ? (
                                <>
                                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                    <NavDropdown title="Categories" id="collasible-nav-dropdown">

                                        {/* {categories.map((category) => {
                                        // {console.log(category.title)}
                                        <NavDropdown.Item as={Link} to={`/${category.title}`} key={category.id}>{category.title}</NavDropdown.Item>
                                    })} */}

                                        <NavDropdown.Item as={Link} to={"/MensClothing"}>MensClothing</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/KidsClothing"}>KidsClothing</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/WomenClothing"}>womenClothing</NavDropdown.Item>

                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link as={Link} to={"/myorders"}>My Orders</Nav.Link>
                                    <Nav.Link as={Link} to={"/cart"}> Cart</Nav.Link>
                                </>
                            ) : (<>
                                <Nav.Link as={Link} to={"/addProducts"}>Add Products</Nav.Link>

                                <Nav.Link as={Link} to={"/myorders"}>Orders Placed</Nav.Link>
                                
                            </>)
                            }
                        </Nav>
                        <Nav>
                            {isloggedIn ? (
                                <NavDropdown title={isloggedIn} id="username">
                                    <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onHandleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                
                            ) : (
                                <Nav>
                                    <Nav.Link as={Link} to={"/signup"} >Sign up</Nav.Link>
                                    <Nav.Link as={Link} to={"/signin"}> Sign in</Nav.Link>
                                </Nav>
                            )}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={searchOnChange}
                            />
                            <Button variant="outline-success" onClick={onSubmitSearch}>Search</Button>
                        </Form>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* {searchList()} */}
        </div>
         
    )
}

export default Header