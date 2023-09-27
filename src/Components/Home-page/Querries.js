import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Querries = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='Form'>
        <Container fluid>
      <Row>
        <Col sm={12} xl={5} data-aos="fade-up">
            <div className='form-img'>
            <Image  src='/img/Form-Img-1.png'/>

            <div className='img-topText'>
                <div className='icon'> <i class="fas fa-comments"></i></div>
                <div className='text'>
                    <h4>24/7 Contact Support</h4>
                    <a href='/'>info@example.com</a>
                </div>
            </div>
            </div>
        </Col>

        <Col sm={12} xl={7} data-aos="fade-down">
            <div className='form-side'>
                <h2>Do you have any querries Please reach us</h2>
                <Form>
      <Form.Group className="mb-5 first-line" controlId="formBasic-1">
        <div><Form.Control type="text" placeholder="First Name"/></div>
        <div><Form.Control type="text" placeholder="Last Name" /></div>
      </Form.Group>

      <Form.Group className="mb-5 first-line" controlId="formBasic-2">
        <div> <Form.Control type="text" placeholder="Your E-mail" /></div>
        <div><Form.Control type="text" placeholder="Company Name" /></div>   
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasic-3">
        <div> <Form.Control as="textarea" placeholder="Additional Message" /></div>
      </Form.Group>
     <div className='form-btn99'>
     <Button type="submit">
      &#9679; Submit
      </Button>
     </div>
    </Form>
            </div>
            </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Querries;