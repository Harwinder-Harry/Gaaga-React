import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export const Footer = () => {
  return (
    <section id='footer'>
        <Container fluid>
      <Row>
        <Col xl={6}>
            <div className='foot-box1'>
                <Image src="/img/logo-icon.svg" alt="Footer logo"/>
                <p>
                Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim. Aliquam vestibulum morbi blandit cursus risus. Ultrices vitae auctor eu augue ut lectus. Ultricies integer quis auctor elit sed vulputate mi sit amet. 
                </p>
                <div className='foot-input'>
                    <form>
                        <input type='email' name='email' />
                        <Button>Subscribe</Button>
                    </form>
                </div>
            </div>
        </Col>
        <Col xl={3} md={6} sm={12}>
            <div className='contact'>
            <h2>Contact Us</h2>
            <h3>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</h3>
            <h3>Phone : +000 - 123 - 456789</h3>
            <h3>Mail : info@example.com</h3>
            <h3>Working Hours : 8hrs</h3>
            </div>
            
        </Col>
        <Col xl={3} md={6} sm={12}>   
        <div className='service'>
            <h2>Services</h2>
            <ul>
                <li>Branding & Identity </li>
                <li>Web Design & Development</li>
                <li>Mobile App Development</li>
                <li>UI & UX Designing </li>
                <li>Digital Marketing</li>
            </ul>
            </div></Col>
      </Row>
    </Container>
    </section>
  )
}
