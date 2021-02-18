import React from 'react';
import {Form, Button} from "react-bootstrap";
import FieldCard from "./FieldCard";
import Field from "./Field";
import ButtonsBottom from  "../Layout/ButtonsBottom/ButtonsBottom";
import {useState} from "react";

export default function Step2({data, toComplete, prevStep}) {
   
   const {cardNumber, cardDate, cardName, password, nikName} = data;

   const evHandler = fn => ({target:{value}}) => fn(value); 
    
   const submitHandler = e => {
    e.preventDefault();
    toComplete();
   }
   
    return (
        <Form className="reg__form" onSubmit={submitHandler}>
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
               <Field name={"password"}  type={"password"}  fn={evHandler(password.setPassword)} value={password.password}  required={true}/>
               <div className="reg__password-container">
               <Field name={"password check"}  type={"password"}  fn={evHandler(password.setCheckPassword)} value={password.checkPassword}  required={true}/>
                <div className="reg__password-indicator" 
                 style={{
                   backgroundColor: 
                   (password.password !== password.checkPassword  || password.password === "") ?
                   "red":
                   "green"
                 }}
                ></div>
               </div>
               <Field name={"nickName"}  type={"nickName"}  fn={evHandler(nikName.setNikName)} value={nikName.nikName}  required={true}/>
          </div>          
          <div className="reg__button-place reg__button-place--between">
             <ButtonsBottom>
              <Button variant="secondary"  onClick={e => prevStep()}>Previous</Button>
               <Button variant="secondary" type="submit">Complete</Button>
             </ButtonsBottom>
          </div>
      </Form>
    )
}

// checkPassword, setCheckPassword

Step2.defaultProps = {
  data: {},
  toComplete: () => {},
  prevStep: () => {}

}

