
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="sticky-top header">
            <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Link to="#">JUM T&T</Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="d-flex justify-content-center ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#doctors">Destinations</Nav.Link>
                                <Nav.Link as={HashLink} to="/tours">Tours</Nav.Link>
                                <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#about">Bookings</Nav.Link>
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
                            <div className="d-flex justify-content-end ms-auto">
                                <h5 className="mx-1">Hi</h5>
                                <img src="https://react-bootstrap.netlify.app/logo.svg" alt="" />
                            </div>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;