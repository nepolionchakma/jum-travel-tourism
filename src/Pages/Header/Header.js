
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import "./Header.css"

const Header = () => {
    // Auth
    const { user, handleSignOut } = useAuth();
    return (
        <div className="sticky-top header py-2" >
            <>
                <Navbar expand="lg">
                    <Container fluid>
                        <Link to="#" className="fw-bold fs-4">JUM T&T</Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="d-flex justify-content-center ms-auto my-2 my-lg-0 fw-bold fs-5 text-white"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#doctors">Destinations</Nav.Link>
                                <Nav.Link as={HashLink} to="/tours">Tours</Nav.Link>
                                <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>

                                <Nav.Link as={HashLink} to="/my-order">MyOrder</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {/* <Form className="d-flex justify-content-end">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-img-1.png
                                />
                                <Button variant="d-flex outline-success">Search</Button>
                            </Form> */}
                            <div className="d-flex justify-content-evenly ms-auto">
                                {!user?.displayName ?
                                    <div>
                                        <Link className="px-1 jum-text" to="/login">Login</Link>
                                        <Link className="px-1 jum-text" to="/signup">Signup</Link>
                                    </div> :
                                    <div>
                                        <span className="text-white">Hi,{user.displayName}</span>
                                        <img
                                            style={{
                                                width: '30px',
                                                borderRadius: '50%',
                                                margin: '0px 5px'
                                            }}
                                            src={user.photoURL} alt="" />
                                        <button onClick={handleSignOut} className="btn btn-danger p-1">SignOut</button>
                                    </div>
                                }

                            </div>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;