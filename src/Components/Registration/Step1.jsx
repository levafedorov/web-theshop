import React from 'react';
import {Form, Button} from "react-bootstrap";
import Field from "./Field";


export default function Step1({data, nextStep}) {

   const evHandler = fn => ({target:{value}}) => fn(value); 
   const {email, fullName, company, adress, postCode, town, state, province} = data;
    return (
        <Form className="reg__form" onSubmit={e => {e.preventDefault(); nextStep();}}>
          <div className="reg__steps">
            <span className="pers-info text-primary" style={{fontSize: "2rem"}}>Personal Info</span>
            /
            <span className="card-ditails">Card ditails</span>        
          </div>
          <div className="reg__inputs">
              <Field name={"email"} type={"email"}  fn={evHandler(email.setEmail)} value={email.email} required={true}/>
              <Field name={"full name"} type={"text"}  fn={evHandler(fullName.setFullName)} value={fullName.fullName}  required={true}/>
              <Field name={"company"} type={"text"}  fn={evHandler(company.setCompany)} value={company.company}  required={false}/>
              <Field name={"postal code"} type={"number"} fn={evHandler(postCode.setPostCode)} value={postCode.postCode}  required={true}/>
              <Field name={"town"} type={"text"} fn={evHandler(town.setTown)} value={town.town}  required={true}/>
              <Field name={"state"} type={"text"} fn={evHandler(state.setState)} value={state.state}  required={true}/>
              <Field name={"province"} type={"text"} fn={evHandler(province.setProvince)} value={province.province} />
              <Field name={"adress"} type={"text"}  fn={evHandler(adress.setAdress)} value={adress.adress}  required={true}/>
          </div>
          <div className="reg__button-place">
            <Button variant="secondary" type="submit">Next</Button>
          </div>
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