
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation () {
    return(
        <Container fluid>
          <Row>
     <Navbar bg="dark" expand="md"  className='navbar'>
           <Navbar.Brand className='brand' href="/"><img className='logo' src='pics/icon-1.png' alt='logo'/></Navbar.Brand>
           <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link">
            <Nav.Link className='navlink' href="/">Home</Nav.Link>
            <Nav.Link className='navlink' href="/about">About</Nav.Link>
            <Nav.Link className='navlink' href="/menu">Menu</Nav.Link>
            <Nav.Link className='navlink' href="/gallery">Gallery</Nav.Link>
            {/* <Nav.Link className='navlink' href="/team">Team</Nav.Link> */}
            <Nav.Link className='navlink' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Row>
    </Container>
    );
}
export default Navigation;