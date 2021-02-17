import React from 'react';
import {Form, Button} from "react-bootstrap";
import Field from "./Field";
import FieldCountry from "./FieldCountry";
import ButtonsBottom from  "../Layout/ButtonsBottom/ButtonsBottom";
import {numberInput} from "../../functions/functions";

export default function Step1({data, nextStep}) {



 


   const evHandler = fn => ({target:{value}}) => fn(value); 
   const {email, fullName, company, adress, postCode, town, state, province} = data;

   

   const submitHandler = e => {
        e.preventDefault(); 
        nextStep();  
   } 

   
   const restPostCode = ({target:{value}}) => {
      const output = numberInput(value);
      postCode.setPostCode(output);
  } 

    return (
        <Form className="reg__form" onSubmit={submitHandler}>
          <div className="reg__steps">
            <span className="pers-info text-primary" style={{fontSize: "2rem"}}>Personal Info</span>
            /
            <span className="card-ditails">Card ditails</span>        
          </div>
          <div className="reg__inputs">
              <Field name={"email"} type={"email"}  fn={evHandler(email.setEmail)} value={email.email} required={true}/>
              <Field name={"full name"} type={"text"}  fn={evHandler(fullName.setFullName)} value={fullName.fullName}  required={true}/>
              <Field name={"company"} type={"text"}  fn={evHandler(company.setCompany)} value={company.company}  required={false}/>
              <Field name={"postal code"} type={"number"} fn={restPostCode} value={postCode.postCode}  required={true}/>
              <FieldCountry country={state.state} setCountry={state.setState}  region={province.province} setRegion={province.setProvince}/>
              {/* <Field name={"state"} type={"text"} fn={evHandler(state.setState)} value={state.state}  required={true}/>*/}
              <Field name={"town"} type={"text"} fn={evHandler(town.setTown)} value={town.town}  required={true}/> 
              {/* <Field name={"province"} type={"text"} fn={evHandler(province.setProvince)} value={province.province} /> */}
              <Field name={"adress"} type={"text"}  fn={evHandler(adress.setAdress)} value={adress.adress}  required={true}/>
          </div>
          <ButtonsBottom>
              <Button variant="secondary" type="submit">Next</Button>
          </ButtonsBottom> 
      </Form>
              
    )
}

Step1.defaultProps = {
    data: {},
    nextStep: () => {}
}


//STEP 1
        //email //fullname //company //address //postal code // town //state //province

// FUNCS
      //setEmail // setFullName// setCompany// setAdress// setPostCode // setTown // setState  // setProvince