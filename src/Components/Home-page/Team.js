import React,{useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Team = () => {

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
    <section id='team'>

<Container fluid>
      <Row>
        <Col>
        <div className='top-text'  data-aos="zoom-in">
            <div className='box-1'>
                <div className='one'>
                <div className="horizontal-line"></div>
                 <i class="fas fa-circle"></i>
                </div>
                <h4>Our Team</h4>
                <div className='one'>
                <i class="fas fa-circle"></i>
                <div className="horizontal-line"></div>
                </div>
            </div>
            <h3>Speak With One of Our Experts</h3>
        </div>
        <div
              style={{
                position: "relative",
              }}
              data-aos="fade-down"
            >
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-fluid"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                loop = {true}
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
      
<div class="card">
				<div class="content">
					<div class="imgBx">
          <Image src="/img/Team-Img-1.png"  alt='one'/>
          <ul class="sci">
					<li>
						<a href="/">FB <span className='cntr-line'>-</span> </a>
					</li>
					<li>
						<a href="/">TW <span className='cntr-line'>-</span></a>
					</li>
					<li>
						<a href="/">YT <span className='cntr-line'>-</span></a>
					</li>
          <li>
						<a href="/">LI </a>
					</li>
				</ul>
					</div>
          <div className='team-text'>
                        <a href='/'>Urbano Nero</a>
                        <h4>Director</h4>
                  </div>
				</div>
			</div>

      <div class="card">
				<div class="content">
					<div class="imgBx">
          <Image src="/img/Team-Img-2.png"  alt='one'/>
          <ul class="sci">
					<li>
						<a href="/">FB <span className='cntr-line'>-</span> </a>
					</li>
					<li>
						<a href="/">TW <span className='cntr-line'>-</span></a>
					</li>
					<li>
						<a href="/">YT <span className='cntr-line'>-</span></a>
					</li>
          <li>
						<a href="/">LI </a>
					</li>
				</ul>
					</div>
          <div className='team-text'>
                        <a href='/'>Irene Renata</a>
                        <h4>Chairman</h4>
                  </div>
				</div>
			</div>

      <div class="card">
				<div class="content">
					<div class="imgBx">
          <Image src="/img/Team-Img-3.png"  alt='one'/>
          <ul class="sci">
					<li>
						<a href="/">FB <span className='cntr-line'>-</span> </a>
					</li>
					<li>
						<a href="/">TW <span className='cntr-line'>-</span></a>
					</li>
					<li>
						<a href="/">YT <span className='cntr-line'>-</span></a>
					</li>
          <li>
						<a href="/">LI </a>
					</li>
				</ul>
					</div>
          <div className='team-text'>
                        <a href='/'>Eloisa Isidora</a>
                        <h4>Managing Director</h4>
                  </div>
				</div>
			</div>

            <div class="card">
				<div class="content">
					<div class="imgBx">
          <Image src="/img/Team-Img-4.png"  alt='one'/>
          <ul class="sci">
					<li>
						<a href="/">FB <span className='cntr-line'>-</span> </a>
					</li>
					<li>
						<a href="/">TW <span className='cntr-line'>-</span></a>
					</li>
					<li>
						<a href="/">YT <span className='cntr-line'>-</span></a>
					</li>
          <li>
						<a href="/">LI </a>
					</li>
				</ul>
					</div>
          <div className='team-text'>
                        <a href='/'>Renzo Fredo</a>
                        <h4>Chief Executive Officer</h4>
                  </div>
				</div>
			</div>


	

              </Carousel>
            </div>
        
        </Col>
      </Row>
    </Container>

    </section>
  )
}

export default Team;
