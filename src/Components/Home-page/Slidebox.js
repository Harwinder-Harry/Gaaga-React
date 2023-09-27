// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Slidebox() {
  return (
    <section id='slidebox'>
      <div class="ctr-accordion" data-aos="fade-down">
            <div class="tab">
                <Image src="/img/slidebox-Img-1.png" alt="img1" />

            </div>
            <div class="tab">
                <Image src="/img/slidebox-Img-2.png" alt="img2" />
            </div>
            <div class="tab">
                <Image src="/img/slidebox-Img-3.png" alt="img3" />
            </div>
       </div>
    
    </section>
  );
}

export default Slidebox;

