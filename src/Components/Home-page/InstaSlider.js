import React,{useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const InstaSlider = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="Insta-slider" style={{width:'100% !important'}}>

      <Container fluid>
        <Row  data-aos="fade-down">
          <Col>
            <div
              style={{
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
                    items: 3,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots = {false}
                // customDot={<CustomDot />}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <div className="img-set1">
                  <Image src="/img/Insta-Img-1.png" alt="Portfolio images" className="image"/>
                  <div className="text-set1">
                  <i class="fab fa-instagram"></i>
                  <p>Follow us on instagram</p>
                  <a href="/">@Gaaga</a>
                  </div>
                </div>

                <div className="img-set1">
                  <Image src="/img/Insta-Img-2.png" alt="Portfolio images" className="image"/>
                  <div className="text-set1">
                  <i class="fab fa-instagram"></i>
                  <p>Follow us on instagram</p>
                  <a href="/">@Gaaga</a>
                  </div>
                </div>

                <div className="img-set1">
                  <Image src="/img/Insta-Img-3.png" alt="Portfolio images" className="image"/>
                  <div className="text-set1">
                  <i class="fab fa-instagram"></i>
                  <p>Follow us on instagram</p>
                  <a href="/">@Gaaga</a>
                  </div>
                </div>

                <div className="img-set1">
                  <Image src="/img/Insta-Img-4.png" alt="Portfolio images" className="image"/>
                  <div className="text-set1">
                  <i class="fab fa-instagram"></i>
                  <p>Follow us on instagram</p>
                  <a href="/">@Gaaga</a>
                  </div>
                </div>

                <div className="img-set1">
                  <Image src="/img/Insta-Img-5.png" alt="Portfolio images" className="image"/>
                  <div className="text-set1">
                  <i class="fab fa-instagram"></i>
                  <p>Follow us on instagram</p>
                  <a href="/">@Gaaga</a>
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


export default InstaSlider;