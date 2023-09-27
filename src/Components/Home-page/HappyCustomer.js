import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const HappyCustomer = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section id='happy-ctmer'>
<Container>
      <Row data-aos="zoom-in-up">
        <Col sm={12} xl={4}>
        <div className='ctmerbox1'>
        <div>
            <h5>17K</h5>
            <a href='#'>Happy <br /> Customers</a>
        </div>
        </div>
        </Col>
        <Col className='box-line' sm={12} md={6} xl={4}>
        <div className='ctmerbox1'>
        <div>
            <h5>63+</h5>
            <a href='#'>Best Technical <br /> Experts</a>
        </div>
        </div>
        </Col>
        <Col>
        <div className='ctmerbox1' sm={12}  md={6} xl={4}>
        <div>
            <h5>500</h5>
            <a href='#'>Completed <br /> Projects</a>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
export default HappyCustomer;