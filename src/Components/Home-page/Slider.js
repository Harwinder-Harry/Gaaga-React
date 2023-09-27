
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import React,{useEffect}  from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


function Slider() {

  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return (
    <section id='slider'>

<AwesomeSlider>
    <div className='img-1'>
    <div className='alt'></div>
      <div className='content-box'>
      <div class="pulser"></div>
      <div className='s-heading'>
        <h1>We Provide</h1>
        <h2>A Great Digital</h2>
        <h1>Platform</h1>
       </div>
       <div className='s-para'>
       <div class="pulser pluse-2"></div>
       <Container>
      <Row>
        <Col xl={2}></Col>
        <Col xl={7}><p>Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        {/* <Col xl={3} className='btss'> <Button> Next Slide</Button></Col> */}
      </Row>
    </Container>
        
       
       </div>
      </div>
       </div>

    <div className='img-2'> 
      <div className='alt'></div>
      <div className='content-box'>
      <div class="pulser"></div>
      <div className='s-heading'>
        <h1>We Provide</h1>
        <h2>A Great Digital</h2>
        <h1>Platform</h1>
       </div>
       <div className='s-para'>
       <div class="pulser pluse-2"></div>
       <Container>
      <Row>
        <Col xl={2}></Col>
        <Col xl={7}><p>Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        {/* <Col xl={3} className='btss'> <Button> Next Slide</Button></Col> */}
      </Row>
    </Container>
       </div>
      </div> </div>


    <div className='img-1'> <div className='alt'></div>
      <div className='content-box'>
      <div class="pulser"></div>
      <div className='s-heading'>
        <h1>We Provide</h1>
        <h2>A Great Digital</h2>
        <h1>Platform</h1>
       </div>
       <div className='s-para'>
       <div class="pulser pluse-2"></div>
       <Container>
      <Row>
        <Col xl={2}></Col>
        <Col xl={7}><p>Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        {/* <Col xl={3} className='btss'> <Button> Next Slide</Button></Col> */}
      </Row>
    </Container>
        
       
       </div>
      </div> </div>


    <div className='img-2'> <div className='alt'></div>
      <div className='content-box'>
      <div class="pulser"></div>
      <div className='s-heading'>
        <h1>We Provide</h1>
        <h2>A Great Digital</h2>
        <h1>Platform</h1>
       </div>
       <div className='s-para'>
       <div class="pulser pluse-2"></div>
       <Container>
      <Row>
        <Col xl={2}></Col>
        <Col xl={7}><p>Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        {/* <Col xl={3} className='btss'> <Button> Next Slide</Button></Col> */}
      </Row>
    </Container>
        
       
       </div>
      </div></div>
  </AwesomeSlider>



    {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Slider-Image-1.png" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 data-aos="fade-up">We Provide</h1>
          <h2 data-aos="fade-down">A Great Digital</h2>
          <h1 data-aos="fade-up">Platform</h1>

          <Container>
      <Row>
        <Col xl={9}><p data-aos="fade-down">Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        <Col xl={3} ><Button> <i class="fas fa-arrow-right"></i>
        <div className='symbols'>
            <i class="fas fa-circle"></i>
        </div>
        Next Slide</Button></Col>
      </Row>
    </Container>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          src="/img/Slider-image-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 data-aos="fade-up">Preformance In</h1>
          <h2 data-aos="fade-down">Digital Marketing</h2>
          <h1 data-aos="fade-up">Is Better Now</h1>
          <Container>
      <Row>
        <Col xl={9}><p data-aos="fade-down">Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        <Col xl={3} ><Button> <i class="fas fa-arrow-right"></i>
        <div className='symbols'>
            <i class="fas fa-circle"></i>
        </div>
        Next Slide</Button></Col>
      </Row>
    </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="/img/Slider-Image-1.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 data-aos="fade-up">We Provide</h1>
          <h2 data-aos="fade-down">A Great Digital</h2>
          <h1 data-aos="fade-up">Platform</h1>
          <Container>
      <Row>
        <Col xl={9}><p data-aos="fade-down">Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        <Col xl={3} className='btnss'><Button> <i class="fas fa-arrow-right"></i>
        <div className='symbols'>
            <i class="fas fa-circle"></i>
        </div>
        Next Slide</Button></Col>
      </Row>
    </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          src="/img/Slider-image-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 data-aos="fade-up">Preformance In</h1>
          <h2 data-aos="fade-down">Digital Marketing</h2>
          <h1 data-aos="fade-up">Is Better Now</h1>
          <Container>
      <Row>
        <Col xl={9}><p data-aos="fade-down">Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Quam id leo in vitae turpis. Laoreet non curabitur gravida arcu ac. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. At ultrices mi tempus imperdiet nulla elit eget.</p></Col>
        <Col xl={3}><Button> <i class="fas fa-arrow-right"></i>
        <div className='symbols'>
            <i class="fas fa-circle"></i>
        </div>
        Next Slide</Button></Col>
      </Row>
    </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
  </section>
  );
}

export default Slider;