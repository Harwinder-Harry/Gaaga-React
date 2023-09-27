// import { Header } from 'antd/es/layout/layout';

import './App.css';
import { Copyright } from './Components/Home-page/Copyright';
import { Creativework } from './Components/Home-page/Creativework';
import CustomDigitally from './Components/Home-page/CustomDigitally';
import Departments from './Components/Home-page/Departments';
import { Footer } from './Components/Home-page/Footer';
import HappyCustomer from './Components/Home-page/HappyCustomer';
import Headercom from './Components/Home-page/Headercom';
import InstaSlider from './Components/Home-page/InstaSlider';
import Querries from './Components/Home-page/Querries';
import Slidebox from './Components/Home-page/Slidebox';
import Slider from './Components/Home-page/Slider';
import Team from './Components/Home-page/Team';
import Testimonial from './Components/Home-page/Testimonial';
import YourBusiness from './Components/Home-page/YourBusiness';

function App() {
  return (
    <div className="App">
    <Headercom />
    <Slider />
    <Departments />
    <Slidebox />
    <Creativework />
    <CustomDigitally />
    <Testimonial />
    <HappyCustomer />
    <YourBusiness />
    <Team />
    <Querries />
    <InstaSlider />
    <Footer />
    <Copyright />
    </div>
  );
}

export default App;
