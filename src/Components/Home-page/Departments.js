import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import React, {useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Departments() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
   <section id='departments'>
     <Container>
      <Row>
        <Col>
        <Tabs
      defaultActiveKey="webapplication"
      id="uncontrolled-tab-example"
      className="mb-3"
      data-aos="fade-down"
    >
      <Tab eventKey="webapplication" title="Web Application">
      <Container>
      <Row>
        <Col xl={3} className='col-set'>
        <div className='tab-img'  data-aos="fade-up">
            <Image src='/img/Tab-Widget-Img1.png' alt='Tab-Widget-Img1'/>
        </div>
        </Col>
        <Col xl={6} className='col-set' data-aos="fade-down">
            <h1>We Solve Your Problem With Our <span className='text-clr'> Best Experts</span>Lead Your Business With A <span className='text-clr'>Digital Platform </span> </h1>
        </Col>
        <Col xl={3} className='col-set' data-aos="fade-up"><h3>View Details</h3></Col>
      </Row>
      
    </Container>
      </Tab>
      <Tab eventKey="seo" title="SEO">
      <Container>
      <Row data-aos="fade-down">
        <Col xl={3} className='col-set'>
        <div className='tab-img' >
            <Image src='/img/Tab-Widget-Img2.png' alt='Tab-Widget-Img1'/>
        </div>
        </Col>
        <Col xl={6} className='col-set' >
	<h1>	Small Ideas Can Make Big Changes <span className='text-clr'>In Your Business,</span>Get Creative Ideas From Us To Improve Your Business </h1></Col>
        <Col xl={3} className='col-set'><h3>View Details</h3></Col>
      </Row>
    </Container>
      </Tab>

      <Tab eventKey="mobileapplications" title="Mobile Applications">
      <Container>
      <Row>
        <Col xl={3} className='col-set'>
        <div className='tab-img' >
            <Image src='/img/Tab-Widget-Img3.png' alt='Tab-Widget-Img1'/>
        </div>
        </Col>
        <Col xl={6} className='col-set' ><h1>
		We Create Cutting-Edge And Adaptable <span className='text-clr'>Mobile Applications </span>For Your Start-Up Businesses</h1></Col>
        <Col xl={3} className='col-set' ><h3>View Details</h3></Col>
      </Row>
      
    </Container>
      </Tab>
      
      <Tab eventKey="digitalmarketing" title="Digital Marketing">
      <Container>
      <Row>
        <Col xl={3} className='col-set'>
        <div className='tab-img'>
            <Image src='/img/Tab-Widget-Img4.png' alt='Tab-Widget-Img1'/>
        </div></Col>
        <Col xl={6} className='col-set' > <h1>  
		This Is The Era Of <span className='text-clr'>Digital Platform </span>And You Can Establish Your Business Without Any Hesitation	</h1></Col>
        <Col xl={3} className='col-set' ><h3>View Details</h3></Col>
      </Row>
    </Container>
      </Tab>
      <Tab eventKey="contentmarketing" title="Content Marketing">
      <Container>
      <Row>
        <Col xl={3} className='col-set'>
          <div className='tab-img'>
            <Image src='/img/Tab-Widget-Img5.png' alt='Tab-Widget-Img1'/>
        </div></Col>
        <Col xl
        ={6} className='col-set'>
            <h1>
		Talk To Your Customers With The <span className='text-clr'>right Content </span>And Our Experts Will Guide You To Create Content</h1>
        </Col>
        <Col xl={3} className='col-set'>
          <h3>View Details</h3>
        </Col>
      </Row>
    </Container>
      </Tab>
    </Tabs></Col>
      </Row>
    </Container>
   </section>    
  );
}

export default Departments;