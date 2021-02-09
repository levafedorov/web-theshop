import React from 'react';
import {Form, Button} from "react-bootstrap";
import FieldCard from "./FieldCard";
import Field from "./Field";

export default function Step2({data, toComplete, prevStep}) {

   const {cardNumber, cardDate, cardName} = data;

   const evHandler = fn => ({target:{value}}) => fn(value); 
    
    return (
        <Form className="reg__form" onSubmit={e => {e.preventDefault(); console.log("test");}}>
          <div className="reg__steps">
            <span className="pers-info">Personal Info</span>
            /
            <span className="card-ditails text-primary" style={{fontSize: "2rem"}}>Card ditails</span>        
          </div>
          <div className="reg__inputs">
              <Field name={"name on card"} type={"text"}  fn={evHandler(cardName.setCardName)} value={cardName.cardName}  required={true}/>
              <FieldCard 
              name="card info" 
              fnNumber={evHandler(cardNumber.setCardNumber)}
               valueNumber={cardNumber.cardNumber}
               fnDate={evHandler(cardDate.setCardDate)}
               valueDate={cardDate.cardDate}
               required={true}
               />
          </div>          
          <div className="reg__button-place reg__button-place--between">
               <Button variant="secondary"  onClick={e => prevStep()}>Previous</Button>
               <Button variant="secondary" type="submit">Complete</Button>
          </div>
      </Form>
    )
}

// cardNumber// cardDate// cardType// cardName

Step2.defaultProps = {
  data: {},
  toComplete: () => {},
  prevStep: () => {}

}

