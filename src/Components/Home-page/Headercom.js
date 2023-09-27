import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Headercom() {
  return (
    <section id='header'>
    <Navbar expand="lg" className=" py-4" >
      <Container>
        <Navbar.Brand href="#">
          <Image src="/img/logo-icon.svg" alt=" Top Header Image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-5 mp-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Projects</Nav.Link>
            <Nav.Link href="#action1">Services</Nav.Link>
            <Nav.Link href="#action1">Blog</Nav.Link>
            <Nav.Link href="#action1">Contant Us</Nav.Link>
          </Nav>
          <div className="d-flex btn-tophead">
            <Button variant="outline-success" >&#9679; Lets Start</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Headercom;