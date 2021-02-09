import {useState} from 'react';
import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';


export default function Registration({sendData, resError}) {
      const [step, setStep] = useState(1);
      const [error, setError] = useState(false);
      const [email, setEmail] = useState("asdasd@asd");
      const [fullName, setFullName] = useState("qwey");
      const [company, setCompany] = useState("qwery");
      const [adress, setAdress] = useState("qwery");
      const [postCode, setPostCode] = useState("123");
      const [town, setTown] = useState("qwery");
      const [state, setState] = useState("qwerty");
      const [province, setProvince] = useState("qweewt");
      const [cardNumber, setCardNumber] = useState("");
      const [cardDate, setCardDate] = useState("");
      const [cardName, setCardName] = useState("");


      //STEP 1
        //email //fullname //company //address //postal code // town //state //province

     const nextStep = () => {
         if(fullName && postCode && adress && town){
            setStep(2);
         }
     }

     const prevStep = () => {
        setStep(1);
     }

     const toComplete = () => {
         const data = {
            step,
            email,
            fullName,
            company,
            adress,
            postCode,
            town,
            state,
            province,}
          
          sendData({})
     }

     
     const errorMessage = 
     resError || error ? 
     <div className="reg__error">
        { resError || error}
     </div> :
      null


      const step1 = {
        email: {setEmail, email},
        fullName: {setFullName, fullName},
        company: {setCompany, company},
        adress: {setAdress, adress},    
        postCode: {setPostCode, postCode}, 
        town: {setTown, town},
        state: {setState, state},   
        province: {setProvince, province}
      }


      const step2 = {
        cardNumber : {cardNumber, setCardNumber},
        cardDate : {cardDate, setCardDate},
        cardName: {cardName, setCardName}
      }
      
    
    let displayedStep;
    

    switch(step){
        case 1 :
           displayedStep = <Step1 data={step1} nextStep={nextStep}/>;
           break;
        case 2 :
           displayedStep = <Step2 data={step2} prevStep={prevStep} toComplete={toComplete}/>;
           break;
        default:
            displayedStep = null;
    }
   
    return (
        <section className="reg">
             {displayedStep}
             <errorMessage />
        </section>
    )
}
