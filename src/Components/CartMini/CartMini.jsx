import {React, useState, useEffect, useRef} from 'react';
import {Button} from "react-bootstrap";
import {Cart4} from "react-bootstrap-icons";
import {useSelector, useDispatch} from "react-redux";
import {clearCart} from "../../Redux/actions/itemsActions";
import {Link} from "react-router-dom";

export default function CartMini() {

    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const timeId = useRef()
    const cart = useSelector(state => state.cart);
    
    
    useEffect(() => {
    setActive(true);
    clearTimeout(timeId.current);    
    timeId.current = setTimeout(() => {
    setActive(false);   
    }, 3500);  
    return () => {
     clearTimeout(timeId.current);
    }
    }, [cart]);




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
    
    const clearCartHandler = e => {
        localStorage.removeItem("cart");
        dispatch(clearCart());
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
                    <div className="cart-mini__amount text-white">{cart ? cart.pieces : 0}pieces</div>
                    <div className="cart-mini__sum text-white">{cart ? cart.sum : 0}$</div>
                    </div>
                </div>
                <div className="cart-mini__bottom bg-light">
                <div className="cart-mini__checkout">
                <Link to="/cart">
                   <Button variant="link">Details</Button>
                </Link>
                <Button variant="link" onClick={clearCartHandler}>Clear</Button>
                </div>
                </div>
            </div>
    )
}
