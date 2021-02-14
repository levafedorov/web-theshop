import {useState, useEffect} from "react";
import "./main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import Header from "./Components/Header/Header";
import MainPage from "./Components/SectionMainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import ModalRegistration from "./Components/Registration/ModalRegistration/ModalRegistration";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import PageBox from "./Components/PageBox/PageBox";
import SectionMainCart from "./Components/SectionMainCart/SectionMainCart";
import SectionPayment from "./Components/SectionPayment/SectionPayment";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getAllItems} from "./Redux/actions/itemsActions";

library.add(faHeart, faHeartBroken);


AOS.init();

function App() {
  
  const [regOn, setRegOn] = useState(false);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllItems());
    }, []);
  
   
  const switchOfFModal = (ev) => {
    setRegOn(false);
  }

  const isReg = 
  regOn ? (
  <ModalRegistration switchOff={switchOfFModal} />
   ) :
  null

  return (
    <div className="App" >
        <Header />
         <MainPage /> 
      {/* <ItemDetails /> */}
          {/* <PageBox>
            <SectionMainCart/>
          </PageBox> */}
        {/* <PageBox>
          <SectionPayment />
        </PageBox> */}
        <Footer />
       {isReg}
    </div>
  );
}

export default App;
