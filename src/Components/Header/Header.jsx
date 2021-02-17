import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {React, useState} from 'react';
import {useDispatch} from "react-redux";
import {regToggler} from "../../Redux/actions/itemsActions";


export default function Header() {
    const [login, setLoggin] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    
    const regHandler = e => {
      dispatch(regToggler());
    }

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/"><h1 className="text-primary">The Shop</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/card">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="login" className="mr-sm-2" onChange={(ev) => setLoggin(ev.target.value)} value={login}/>
              <FormControl type="text" placeholder="password" className="mr-sm-2" onChange={(ev) => setPassword(ev.target.value)} value={password}/>
              <Button variant="outline-primary">Login</Button>
              <Button variant="outline-primary" onClick={regHandler}>Registration</Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
    )
}

