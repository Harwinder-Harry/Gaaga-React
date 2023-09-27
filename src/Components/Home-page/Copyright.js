import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/facebook';

export const Copyright = () => {
  return (
      <section id='copyright'>
 <Container fluid>
      <Row>
        <Col xl={4} md={12}  sm={12}>
        <ul className='menu-links'>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Projects</li>
        </ul>
        </Col>
        <Col xl={4} md={12}  sm={12}>
        <ul className='social-links'>
          <li><SocialIcon url="https://in.linkedin.com/" /></li>
          <li><SocialIcon url="https://www.facebook.com/" /></li>
          <li><SocialIcon url="https://www.instagram.com/" /></li>
        </ul> 
        </Col>
        <Col xl={4} md={12}  sm={12}>
        <p> Copyright @abc  All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
      </section>
  )
}
