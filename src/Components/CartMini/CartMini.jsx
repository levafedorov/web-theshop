import React from 'react';
import {Button} from "react-bootstrap";
import {Cart4} from "react-bootstrap-icons";

export default function CartMini() {
    return (
        <div className="cart-mini bg-secondary">
            <div className="cart-mini__top">
                 <div className="cart-mini__icon">
                 <Cart4 size="70"/>
                </div>  
                 <div className="cart-mini__overall">
                 <div className="cart-mini__amount text-white">2pieces</div>
                 <div className="cart-mini__sum text-white">345$</div>
                 </div>
            </div>
            <div className="cart-mini__bottom bg-light">
              <div className="cart-mini__checkout">
              <Button variant="link">Details</Button>
              <Button variant="link">Delete</Button>
              </div>
            </div>
        </div>
    )
}
