import React, { PropTypes } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./manubar.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Manubar = props => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-dark bgdark">
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        <div className="d-inline-block align-top">
        Schadul
        <img src="https://img.icons8.com/ios-filled/24/000000/squared-menu.png"/> 
        <img src="https://img.icons8.com/material/35/000000/circled-s.png"/>                 
        </div>      
         </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
       
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <h4 className="header">Site</h4>
        </div>
    );
};



export default Manubar;