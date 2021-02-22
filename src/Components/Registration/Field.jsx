import React from 'react';
import {Form} from "react-bootstrap";


export default function Field({name, type, fn, required, value}) {
    

    return (
        <Form.Group controlId={`formGroup${name.replace(/\s/g, "")}`} className="reg__group">
                <Form.Label>
                    {`${required ? "*" : ""}`}
                    <span className="name">
                        {`${name}:`}
                    </span>
                </Form.Label>
                <Form.Control 
                type={type} 
                 placeholder={name}
                 onChange={fn} 
                 required={required} 
                 value={value}
                 name={name.trim().replace(/\s/g, "-")}/>
        </Form.Group>
    )
}

Field.defaultProps = {
    required: false,
    name: "",
    type: "",
    fn: () => {}
}