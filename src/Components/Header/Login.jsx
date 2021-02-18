import {Form, FormControl, Button} from "react-bootstrap";

export default  function Login({setLogin, setPassword, regHandler, login, password, loginHandler}){
   
    return (
        <Form inline>
              <FormControl type="text" placeholder="login" className="mr-sm-2" onChange={(ev) => setLogin(ev.target.value)} value={login}/>
              <FormControl type="password" placeholder="password" className="mr-sm-2" onChange={(ev) => setPassword(ev.target.value)} value={password}/>
              <Button variant="outline-primary" onClick={loginHandler}>Login</Button>
              <Button variant="outline-primary" onClick={regHandler}>Registration</Button>
        </Form>
    )
}


Login.defaultProps = {
    setLoggin:() => {}, 
    setPassword:() => {}, 
    regHandler:() => {},
    login: "",
    password: ""
}