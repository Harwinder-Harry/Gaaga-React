import React, {useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Creativework = () => {

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
    <section id="creativework">
      <Container className="text-container">
        <Row>
          <Col sm={12} xl={6}>
            <div className="main1">
              <div className="box1">
              <div className="horizontal-line"></div>
                  <div className="zoom-in-out-box"  data-aos="fade-down"></div>
                <h2>
                 Projects
                </h2>
              </div>
              <div className="box2" data-aos="fade-up">
                <h2 > Creative Works</h2>
              </div>
            </div>
          </Col>
          <Col sm={12} xl={6}>
            <div className="main2" data-aos="zoom-in">
              <p>
                Feugiat nibh sed pulvinar proin. Velit aliquet sagittis id
                consectetur purus ut. Tristique sollicitudin nibh sit amet
                commodo. Fermentum et sollicitudin ac orci phasellus. Mauris
                cursus mattis molestie a iaculis at. Euismod nisi porta lorem
                mollis aliquam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mobile-div">
        <Row  data-aos="fade-down">
          <Col>
            <div
              style={{
                paddingBottom: "30px",
                position: "relative",
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={false}
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
                    items: 4,
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
                    items: 2,
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
                <div className="img-set">
                  <Image src="/img/portfolio-1.jpg" alt="Portfolio images" className="image"/>
                  <div className="text-set">
                    <h1>Busniess App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                    <div className="card-btns">
                    <div className="horizontal-line"></div>
                  <div className="zoom-in-out-box"></div>
                  <Button> Read More</Button>
                    </div>
                  </div>
                </div>

                <div className="img-set">
                  <Image src="/img/portfolio-2.jpg" alt="Portfolio images" className="image"/>
                  <div className="text-set">
                    <h1>Busniess Web</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <div className="card-btns">
                    <div className="horizontal-line"></div>
                  <div className="zoom-in-out-box"></div>
                  <Button> Read More</Button>
                    </div>
                  </div>
                </div>

                <div className="img-set">
                  <Image src="/img/portfolio-3.png" alt="Portfolio images" className="image"/>
                  <div className="text-set">
                    <h1>Market Analysis</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <div className="card-btns">
                    <div className="horizontal-line"></div>
                  <div className="zoom-in-out-box"></div>
                  <Button> Read More</Button>
                    </div>
                  </div>
                </div>

                <div className="img-set">
                  <Image src="/img/portfolio-4.jpg" alt="Portfolio images" className="image"/>
                  <div className="text-set">
                    <h1>Virtual Busniess</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <div className="card-btns">
                    <div className="horizontal-line"></div>
                  <div className="zoom-in-out-box"></div>
                  <Button> Read More</Button>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Creativework;