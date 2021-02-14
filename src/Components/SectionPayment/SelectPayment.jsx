import React from 'react';
import {CreditCard, CreditCardFill} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";

export default function SelectPayment() {
    return (
        <div className="section-payment__select-payment bg-secondary">
             <div className="section-payment__options">
                 <label htmlFor="profileCard" className="section-payment__label">
                     <input type="radio" id="profileCard" className="section-payment__input" name="profileCard"/>
                      <div className="section-payment__bg section-payment__bg--profile">
                          <div className="section-payment__header">Profile Card</div>
                         <CreditCard size={96} className="section-payment__icon"/>
                      </div>
                 </label>
                 <label htmlFor="differentCard" className="section-payment__label">
                     <input type="radio" id="differentCard" className="section-payment__input" name="profileCard"/>
                      <div className="section-payment__bg section-payment__bg--diferent">
                      <div className="section-payment__header">Another Card</div>
                          <CreditCardFill size={96} className="section-payment__icon"/>
                      </div>
                 </label>
              </div>
            <Button variant="light" type="button" className="section-payment__btn">Next</Button>
        </div>
    )
}
