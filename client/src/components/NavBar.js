import React    from 'react';
import {Navbar, Nav, Form, FormControl,NavDropdown,Button} from 'react-bootstrap';

class Navrbar extends React.Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
    );
  }

}

export default Navrbar;
