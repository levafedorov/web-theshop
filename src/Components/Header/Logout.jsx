
import {Form, FormControl, Button} from "react-bootstrap";

export default  function Logout({nikName, setUnlogged}){
   
    return (
        <Form inline>
              <Form.Text className="mr-3 text-secondary">{nikName}</Form.Text>
              <Button variant="outline-primary" onClick={setUnlogged}>logout</Button>
        </Form>
    )
}


Logout.defaultProps = {
   nikName: "default nikName",
   setUnlogged: () => {}
}