import React from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap' 

export default (props) =>{

return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Im Anonymous</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}