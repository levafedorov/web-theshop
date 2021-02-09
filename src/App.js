import {useState} from "react";
import "./main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import ModalRegistration from "./Components/Registration/ModalRegistration/ModalRegistration";


AOS.init();

function App() {
  
  const [regOn, setRegOn] = useState(false);

  const switchOfFModal = (ev) => {
    setRegOn(false);
  }

  const isReg = 
  regOn ? (
  <ModalRegistration switchOff={switchOfFModal} />
   ) :
  null

  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
       {isReg}
    </div>
  );
}

export default App;
