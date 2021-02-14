import React from 'react'
import {Button} from "react-bootstrap";

export default function FinishPayment() {
    return (
        <div className="section-payment__finish">
            <h2 className="section-payment__h">Information check</h2>
            <div className="section-payment__card-info">
                <div className="section-payment__card-name">
                  <span className="section-payment__info-title">Name on Card:</span> Fedorov Lev
                </div>
                <div className="section-payment__card-number">
                <span className="section-payment__info-title">Card number:</span> 4455 342132 123 12   
                </div>
            </div>
            <div className="section-payment__items-info">
                <h3 className="section-payment__items-title">Items</h3>
               <ol className="section-payment__list">
                   <li className="section-payment__list-item">
                       <span className="section-payment__list-item-title">Item name asda sdas dasdasdadsaa</span>
                       <span className="section-payment__list-item-amount">30pieses</span>
                       <span className="section-payment__list-item-price">200$</span>
                   </li>
                   <span className="section-payment__total"></span>
               </ol>
            </div>
            <div className="section-payment__btns">
                <Button>Back</Button>
                <Button>Confirm</Button>
            </div>
        </div>
    )
}
