import React from 'react';
import {Form} from "react-bootstrap";
import CreditCardInput from 'react-credit-card-input';


export default function FieldCard({name,  fnNumber, fnDate, valueNumber, valueDate, required}) {
    

    return (
        <Form.Group controlId="formGroupCardInfo" className="reg__group">
                <Form.Label>
                      {`*${name}:`}
                </Form.Label>
                <CreditCardInput
                    cardNumberInputProps={{ value: valueNumber, onChange: fnNumber, required}}
                    cardExpiryInputProps={{ value: valueDate, onChange:fnDate, required}}
                    fieldClassName="inputCardData"
                 />
        </Form.Group>
    )
}

FieldCard.defaultProps = {
    fnNumber: () => {},
    fnDate: () => {},
    valueNumber: "",
    valueDate: "",
    name: "",
}