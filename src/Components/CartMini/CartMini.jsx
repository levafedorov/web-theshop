import {React, useState} from 'react';
import {Button} from "react-bootstrap";
import {Cart4} from "react-bootstrap-icons";

export default function CartMini() {

    const [active, setActive] = useState(false);

    const activeAnimation = {
        transform: "translateX(0%)"
    } 
    const inActiveAnimation = {
        transform: "translateX(100%)"
    } 

    const switcherInActive = {
        transform: "translateX(-120%)"
    }

    const switcherActive = {
        transform: "translateX(0)"
    }

    return (
            <div className="cart-mini bg-secondary" style={
                active ? activeAnimation : inActiveAnimation
            }>
                <div className="cart-mini__top">
                <button className="cart-mini__switch-off" onClick={e => setActive(!active)} style={
                   active ? switcherActive: switcherInActive 
                }>
                    <div className="cart-mini__icon">
                        <Cart4 size="70"/>
                    </div>  
                </button>
                    <div className="cart-mini__overall">
                    <div className="cart-mini__amount text-white">2pieces</div>
                    <div className="cart-mini__sum text-white">345$</div>
                    </div>
                </div>
                <div className="cart-mini__bottom bg-light">
                <div className="cart-mini__checkout">
                <Button variant="link">Details</Button>
                <Button variant="link">Clear</Button>
                </div>
                </div>
            </div>
    )
}
