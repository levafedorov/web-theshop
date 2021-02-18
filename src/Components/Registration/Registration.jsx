import {useState, useRef} from 'react';
import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import {formatCheck} from "../../functions/functions";
import ErrorMessage from "../Error/ErrorMessage";

export default function Registration({sendData, resError}) {
      const [step, setStep] = useState(1);
      const [error, setError] = useState("");
      const [email, setEmail] = useState("");
      const [fullName, setFullName] = useState("");
      const [company, setCompany] = useState("");
      const [adress, setAdress] = useState("");
      const [postCode, setPostCode] = useState("");
      const [town, setTown] = useState("");
      const [state, setState] = useState("");
      const [province, setProvince] = useState("");
      const [cardNumber, setCardNumber] = useState("");
      const [cardDate, setCardDate] = useState("");
      const [cardName, setCardName] = useState("");
      const [password, setPassword] = useState("");
      const [nickName, setNikName] = useState("");
      const [checkPassword, setCheckPassword] = useState("");
    
    const intervalRef = useRef();  

    const errorHandler = (message) => {
        setError(message);
        clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(() => {
         setError("");
        }, 8000);
    }


     const nextStep = () => {
         if(!state || !province){
            errorHandler("Fill all required fields*");
         }else{
            setStep(2);
         }  
     }


     const prevStep = () => {
        setStep(1);
     }

    


     const toComplete = () => {
     const isValidCardName = 
      formatCheck(cardName, "(?:^[A-ZĚŠČŘŽÝÁÍÉÚŮ][a-z+ěščřžýáíéúů]+\\s)(?:[A-Z][a-z]+\\s)*");
     if(isValidCardName instanceof Error){ 
        errorHandler("Name on card is incorrect or missing*"); 
      }else if(checkPassword !== password || password === ""){
         errorHandler("Password is empty or password and check password don't match");
      }else{
         const dataUser = {
            email,
            fullName,
            company,
            adress,
            postCode,
            town,
            state,
            province,
            password,
            nickName
          }

          const dataCard = {cardNumber,
                              cardDate,
                              cardName,}

          sendData({dataUser, dataCard});
       }
        
     }



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
        cardName: {cardName, setCardName},
        password: {password, setPassword, checkPassword, setCheckPassword},
        nikName: {nickName, setNikName}
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

   const isError = error ? <ErrorMessage userMessage={error}/> : null;

   
    return (
        <section className="reg">
             {displayedStep}
             {isError}
        </section>
    )
}
