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
import ItemDetailsWithErrorHandler from "./Components/ItemDetails/ItemDetails";
import PageBox from "./Components/PageBox/PageBox";
import SectionMainCart from "./Components/SectionMainCart/SectionMainCart";
import SectionPayment from "./Components/SectionPayment/SectionPayment";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getSomeItems, clearAllItems} from "./Redux/actions/itemsActions";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import ErrorMessage from "./Components/Error/ErrorMessage";


library.add(faHeart, faHeartBroken);


AOS.init();

function App() {
  
  const [errorMessage, setErrorMessage] = useState("");
  const {page, category, sort} = useSelector(state => state.items);
  const regOn = useSelector(state => state.general.reg);

  const dispatch = useDispatch();

    useEffect(() => {
        try{
          dispatch(getSomeItems(category, sort, page));
        }
        catch(err){
          errorMessage(err.message)
        }
    }, [category, sort, page]);

  
    useEffect(() => {
      dispatch(clearAllItems());
    }, [category, sort]);



  const isReg = 
  regOn ? (
  <ModalRegistration />
   ) :
  null

  return (
    <div className="App" >
      <Router>
       {
         errorMessage ? 
         <ErrorMessage userMessage={errorMessage} errorMessage={errorMessage} url={"/"}/>
         :
         null
       }
        <Header />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/item/:id" component={ItemDetailsWithErrorHandler} />    
          </Switch>
          {/* <PageBox>
            <SectionMainCart/>
          </PageBox> */}
        {/* <PageBox>
          <SectionPayment />
        </PageBox> */}
        </Router>
        <Footer />
       {isReg}
    </div>
  );
}

export default App;
