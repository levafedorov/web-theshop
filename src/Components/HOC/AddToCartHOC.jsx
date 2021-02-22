import {useDispatch} from "react-redux";
import {addItemToCart} from "../../Redux/actions/itemsActions";

export default function AddToCartHOC(props){

        const dispatch = useDispatch();


      //plus before a value means that the value is an amount of an item that can be both string and number.  
        const addToCartHandler = e => {
          const {title, price, description, image, id} = props;
          const item = {title, price, description, image, id, amount:1}
          let cart = JSON.parse(localStorage.getItem("cart"));
          const initialItems = {
             items:[item],
             sum: item.price,
             pieces: 1
          }
     
          if(cart === null){
           localStorage.setItem("cart", JSON.stringify(initialItems));
           dispatch(addItemToCart(initialItems));
     
          }else{
             const matchingIndex = cart.items.findIndex(storedItem => storedItem.id === item.id);
             if(matchingIndex !== -1){
               cart.items[matchingIndex].amount =  +cart.items[matchingIndex].amount + 1;
             }else{
               cart.items.push(item);
             }
             let sum = 0;
             let pieces = 0;
             for(let {price, amount} of cart.items){
               sum = +(sum + price * +amount).toFixed(2);
               pieces += +amount;
             }
             cart.sum = sum;
             cart.pieces = pieces;
             localStorage.setItem("cart", JSON.stringify(cart));
             dispatch(addItemToCart(cart));
          }
        }
     
     const Wrapped = props.wrapped;

     return <Wrapped {...props} addToCartHandler={addToCartHandler} wrapped={null} /> 
     
}