import React from 'react'
import {Card, Button, ButtonGroup} from "react-bootstrap";
import {cutString} from "../../functions/functions";
import {Link} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {addItemToCart} from "../../Redux/actions/itemsActions";


export default function Item({title, price, description, image, id, addToCartHandler}) {

  //  const dispatch = useDispatch()

  //  const addToCartHandler = e => {
  //    const item = {title, price, description, image, id, amount:1}
  //    let cart = JSON.parse(localStorage.getItem("cart"));
  //    const initialItems = {
  //       items:[item],
  //       sum: item.price,
  //       pieces: 1
  //    }

  //    if(cart === null){
  //     localStorage.setItem("cart", JSON.stringify(initialItems));
  //     dispatch(addItemToCart(initialItems));

  //    }else{
  //       const matchingIndex = cart.items.findIndex(storedItem => storedItem.id === item.id);
  //       if(matchingIndex !== -1){
  //         cart.items[matchingIndex].amount += 1;
  //       }else{
  //         cart.items.push(item);
  //       }
  //       let sum = 0;
  //       let pieces = 0;
  //       console.log(cart.items, cart.sum);
  //       for(let {price, amount} of cart.items){
  //         sum = +(sum + price * amount).toFixed(2);
  //         pieces += amount;
  //       }
  //       cart.sum = sum;
  //       cart.pieces = pieces;
  //       localStorage.setItem("cart", JSON.stringify(cart));
  //       dispatch(addItemToCart(cart));
  //    }
  //  } 

   


    return (
            <Card>
                <Card.Img variant="top" src={image} height="400" className="card__image"/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          {cutString(description, 20)}
                        </Card.Text>
                        <div className="card__add-box">
                          <ButtonGroup>
                          <Link to={`/item/${id}`}>
                            <Button variant="secondary">To item</Button> 
                          </Link>  
                            <Button variant="secondary" onClick={addToCartHandler}>Add to cart</Button>  
                          </ButtonGroup>           
                            <div className="card__price text-primary">{price}$</div>
                        </div>
                    </Card.Body>
            </Card>
       
    )
}


Item.defaultProps = {
    title: "default",
    price: 999,
    description: "Some deafult description",
    image: "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2020/05/Ferret-Pet-Talk.jpeg",
    addToCartHandler:() => {}
}