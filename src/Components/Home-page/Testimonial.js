import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
          <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
            {<div className="horizontal-line" id="bottomBar"></div>}
          </li>
        );
      };

  return (
    <section id='testimonial'>
        <Container>
      <Row data-aos="fade-down">
        <Col sm={12} xl={8}>
            <div className='testimonial-head'>
                What Our People Says
            </div>

            <div
              style={{
                paddingBottom: "90px",
                position: "relative",
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-fluid"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                customDot={<CustomDot />}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
              
                <div className="testimonial-slide">
                  <div className='text'>
                    <p>Neque egestas congue quisque egestas. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Aliquam malesuada bibendum arcu vitae elementum. Dictumst quisque sagittis purus sieu ultrices vitae.</p>
                  </div>

                  <div className='pic-name'>
                    <Image  src='/img/testimonial-3.png'/>
                    <div className='name'>
                        <h6>Lisha -</h6>
                        <p>Shop Owner</p>
                    </div>
                  </div>
                </div>  

                <div className="testimonial-slide">
                  <div className='text'>
                    <p>Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Neque egestas congue quisque egestas. Aliquam malesuada bibendum arcu vitae elementum. Dictumst quisque sagittis purus sieu ultrices vitae.</p>
                  </div>

                  <div className='pic-name'>
                    <Image  src='/img/testimonial-1.png'/>
                    <div className='name'>
                        <h6>Thomas -</h6>
                        <p>CEO</p>
                    </div>
                  </div>
                </div> 

                <div className="testimonial-slide">
                  <div className='text'>
                    <p>Dictumst quisque sagittis purus sieu ultrices vitae. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Neque egestas congue quisque egestas. Aliquam malesuada bibendum arcu vitae elementum.</p>
                  </div>

                  <div className='pic-name'>
                    <Image  src='/img/testimonial-4.png'/>
                    <div className='name'>
                        <h6>Neema -</h6>
                        <p>Designer</p>
                    </div>
                  </div>
                </div> 

                <div className="testimonial-slide">
                  <div className='text'>
                    <p>Aliquam malesuada bibendum arcu vitae elementum. Dictumst quisque sagittis purus sieu ultrices vitae. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.</p>
                  </div>

                  <div className='pic-name'>
                    <Image  src='/img/testimonial-2.png'/>
                    <div className='name'>
                        <h6>Miyama -</h6>
                        <p>Manager</p>
                    </div>
                  </div>
                </div> 
              </Carousel>
            </div>
        </Col>
        <Col sm={12} xl={4} data-aos="fade-up">
            <div className='large-img'>
            <Image  src='/img/Testimonial-Large-img-1.png'/>
            </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
export default Testimonial;
