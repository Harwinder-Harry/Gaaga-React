import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const YourBusiness = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
 <section id='business'>
 <Container fluid>
      <Row>
        <Col className='border-line ps-4' sm={12} xl={6} data-aos="zoom-in">
        <div>
            <h6>
		Don't Hesitate To Digitize Your <span className='colorText'>Business</span> </h6>
        </div>
        </Col>
        <Col className='ps-4' sm={12} xl={6} data-aos="fade-up">
        <div className='text-box'>
            <p>
            Vivamus ut lorem vitae ipsum aliquet ornare. Suspendisse porta velit ut cursus pretium. Proin velit rhoncus, sollicitudin mi sed, luctus erat. Nam eget purus at elit porta auctor. Sed odio maris vulputate in elit vel, finibus efficitur lacus. Maecenas id pretium mauris.
            </p>
            <div className='buttonLink'>
            <div className="horizontal-line"></div>
            <i class="fas fa-circle"></i>
            <p>Let's Talk</p>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
 </section>
  )
}

export default YourBusiness;
