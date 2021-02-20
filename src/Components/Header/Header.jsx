import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {React, useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {regToggler, unLogged, login as sendToLogin} from "../../Redux/actions/itemsActions";
import Login from "./Login";
import Logout from "./Logout";
import ErrorMessage from "../Error/ErrorMessage";

export default function Header() {
    const dispatch = useDispatch();
    let displayed;


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
 
    const userInfo = useSelector(state => state.user);
    let storedUser = localStorage.getItem("user");
    storedUser = JSON.parse(storedUser);
    
    const intervalRef = useRef(); 

    const errorHandler = (message) => {
      setError(message);
      clearTimeout(intervalRef.current);
      intervalRef.current = setTimeout(() => {
       setError("");
      }, 8000);
  }


    const setUnlogged = e => {
       dispatch(unLogged());
    }


    useEffect(() => {
       if(storedUser && !userInfo){
        setLogin(storedUser.email);
        setPassword(storedUser.password);

      }
    }, []);

   
    
    const regHandler = e => {
      dispatch(regToggler());
    }

    const loginHandler = e => {
        if(login === storedUser.email && password === storedUser.password){
            dispatch(sendToLogin(storedUser));
        }else{
          errorHandler("Credentials are incorrect");
        }
    }

    
    if(userInfo){
      displayed = <Logout nikName={userInfo.nickName} setUnlogged={setUnlogged}/>
    }else{
      displayed = (
        <Login setLogin={setLogin} 
        setPassword={setPassword} 
        regHandler={regHandler} 
        login={login} 
        password={password}
        loginHandler={loginHandler}
        />)
    }
   
    
    return (
        <Navbar bg="light" variant="light" expand="lg" className="header">
            <Navbar.Brand href="/"><h1 className="text-primary">The Shop</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/card">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
             {displayed}
            </Navbar.Collapse>
            {error ? <ErrorMessage userMessage={error}/> : null}
          </Navbar>
    )
}

