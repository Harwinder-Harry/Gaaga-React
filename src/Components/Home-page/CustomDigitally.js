import React,{useEffect} from 'react';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Image from 'react-bootstrap/Image';

export const CustomDigitally = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
    <section id='custom-digitally'>
    <div className='marquee-text'>
        <Marquee>
        * Digital Platform * &nbsp; *Creative Ideas * &nbsp;
</Marquee>
    </div>
    </section>
    
    <section id='custom-video'>
        <Container>
      <Row>
        <Col>
        <div className='img-1'  data-aos="fade-up">
            {/* <Image src="/img/Slider-image-2.jpg" /> */}
            <span className='circle'></span>
            <i class="fas fa-circle"></i>
            <h1 data-aos="fade-down"> Connect Your Customers Digitally</h1>
        </div>
        </Col>
      </Row>
    </Container>
        
    </section>

    </div>
  )
}

export default CustomDigitally;
