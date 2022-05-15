import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import '../Components/NavbarComp.css'
 class NavbarComp extends Component {
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to={"/"} className="linknone">Home</Link></Nav.Link>
      <Nav.Link><Link to={"/pages/about"} className="linknone">About</Link></Nav.Link>
      <NavDropdown className="linknone" title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item variant="bg-dark" href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Button variant="primary">Portfolio</Button>{'/portfolio'}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
  <Route path="/" element={<Home />} />;
  <Route path="/pages/about" element={<About />} />;
  </Routes>
            </div>
        );
    }
  }
export default NavbarComp;