import {React, useState, useEffect, useRef} from 'react';
import {Table, Button} from 'react-bootstrap';
import PageBox from '../PageBox/PageBox';
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {clearCart, addItemToCart} from "../../Redux/actions/itemsActions";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {numberInput} from "../../functions/functions";
import Finish from "../Finish/Finish";

export default function SectionMainCart(){
   const [items, setItems] = useState(null);
   const [sum, setSum] = useState(0);
   const [pieces, setPiesces] = useState(0);
   const [finish, setFinish] = useState(false);
   const dispatch = useDispatch();    
   const timeId = useRef();

   const cartFromStorage = useSelector(state => state.cart, shallowEqual);

   useEffect(() => {
       if(cartFromStorage){
        const {items, pieces, sum} = cartFromStorage;
        setItems(items);
        setPiesces(pieces);
        setSum(sum);
       }else{
        setItems([]); 
       }    
   }, [cartFromStorage]);
   

   const changeHandler = ({target}) => {
       let {value, dataset:{id, type}} = target;
       value = numberInput(value);
       const itemsCopy = [...items];
       const itemIndex = itemsCopy.findIndex(item => item.id == id);
       const operatedItem = itemsCopy[itemIndex];
       let newPieces = pieces;
       let newSum = sum;

       const sumDown = sum - operatedItem.price * operatedItem.amount;
       const piecesDown = pieces - operatedItem.amount;

       if(type === "count" && value !== undefined){
          newPieces = piecesDown + +value;
          newSum = +(sumDown + +value * operatedItem.price).toFixed(2);
          operatedItem.amount = value === "" ? "" : +value; 
       }else if(type === "remove"){
          newSum = +(sumDown).toFixed(2);
          newPieces = piecesDown;
          itemsCopy.splice(itemIndex, 1);
       }else{
           return;
       }

       const newItems = {
           items: itemsCopy,
           sum: newSum,
           pieces: newPieces
       }
       
       dispatch(addItemToCart(newItems));
       localStorage.setItem("cart", JSON.stringify(newItems));
    //    setItems(itemsCopy);
    //    setPiesces(newPieces);
    //    setSum(newSum);
   }


   const orderHandler = () => {
       if(items.length === 0) return;
        setFinish(true);
        clearTimeout(timeId.current);
        timeId.current = setTimeout(() => {
            localStorage.removeItem("cart");
            dispatch(clearCart());
            window.location.replace('/');
        }, 2000);
           
   } 
  
//    Finish
// finish
   
    return (
        <PageBox>
        {finish ? 
        <Finish /> :
        <section className="section-main-cart">
            <div className="section-main-cart__headers">
                <div className="section-main-cart__headers-image">Image</div>
                <div className="section-main-cart__headers-title">Title</div>
                <div className="section-main-cart__headers-price">Price</div>
            </div>
            <div className="section-main-cart__table-container">
       {items == null  ? 
        <LoadingIcon /> :
        items.length === 0 ?
        <div className="section-main-cart__empty">
           <h2 className="section-main-cart__h2">Cart is empty...</h2>
        </div> :

        <Table striped bordered hover className="section-main-cart__table">
        <tbody>
        {items.map(({image, title, price, amount, id}, i) => {  
           return (
            <tr  className="section-main-cart__body-tr" key={`${title}-key`}>
                <td className="section-main-cart__image-td"><img 
                src={image} 
                alt="item image" 
                width="100" 
                height="150"/>
                </td>
                <td className="section-main-cart__body-td section-main-cart__body-td--title">{title}</td>
                <td className="section-main-cart__body-td section-main-cart__body-td--price">{price}$</td>
                <td className="section-main-cart__body-td section-main-cart__body-td--options">
                <input type="number" className="section-main-cart__amount" value={amount} data-id={id} onChange={changeHandler} data-type={"count"}/> 
                <Button className="bg-danger" data-id={id} data-type={"remove"} onClick={changeHandler}>X</Button>
                </td>
            </tr>
            )
            }) 
        }      
        </tbody>
        </Table>
        }
        </div>
               <div className="section-main-cart__order">
                   <span className="section-main-cart__total">Total: {sum}$</span>
                    <Button className="section-main-cart__next" onClick={orderHandler}>Order</Button>
                </div>  
                </section>
       }
                </PageBox>
    )
}



