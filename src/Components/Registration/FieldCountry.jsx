import {React, useState} from 'react';
import {Form} from "react-bootstrap";
import CountrySelect from 'react-bootstrap-country-select';


export default function FieldCountry({name, fn, value}) {
    
    const [country, setCountry] = useState(null);
   
    return (
        <Form.Group controlId="formGroupCoutry" className="reg__group">
                <Form.Label>             
                        {`*${name}:`}
                </Form.Label>
                <CountrySelect value={country} onChange={setCountry}/>
        </Form.Group>
    )
}

FieldCountry.defaultProps = {
    required: false,
    name: "",
    type: "",
    fn: () => {}
}