import React from 'react'
import {Container, Button} from "react-bootstrap";
import Comments from "../Comments/Comments";
import ItemRating from "./ItemRating";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {useEffect} from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {clearItem, getItem} from "../../Redux/actions/itemsActions";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ItemDetailsHOC from "../HOC/AddToCartHOC";
import CartMini from "../CartMini/CartMini";

 function ItemDetails({match, addToCartHandler, title, description, price, id, image}){
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(clearItem());
        dispatch(getItem(match.params.id))
    }, []);


    return (
        <section className="item-details">
            <CartMini />
            <Container>
                <div className="item-details__top">
                  {id === undefined ? <LoadingIcon /> :
                    <>
                    <div className="item-details__top-left">
                   <div className="item-details__image-box">
                       <img src={image} alt="image" className="item-details__image"/>
                  </div>
                  <div className="item-details__item-bar">
                      <h2 className="item-details__items-name bg-dark text-white">{title}</h2>
                       <div className="item-details__add-and-price bg-light">
                          <div className="item-details__price text-primary">{price}$</div>
                          <Button variant="secondary" className="item-details__buy-btn" onClick={addToCartHandler}>Add to cart</Button>
                       </div>
                  </div>
                </div>
                <div className="item-details__top-right">
                    <article className="item-details__info-content">
                        <h2 className="item-details__info-header">
                        {title}
                        </h2>
                        <p className="item-details__p">
                           {description}
                        </p>
                    </article>
                    <ItemRating />
                </div> 
                    </>
                  }
                </div>
            </Container>
            <Container>
                <div className="item-details__bottom">
                {id === undefined ? <LoadingIcon /> : <Comments />}
                </div>
            </Container>
            <ScrollToTop />
        </section>
    )
}


ItemDetails.propsDefault = { 
    addToCartHandler: () => console.log("default function"), 
    title:"", 
    description:"", 
    price:0, 
    id:0, 
    image:""
}


export default function ItemDetailsWithErrorHandler(props){

    const itemInfo = useSelector(state => state.items.item);

    return <ErrorBoundary url={props.match.url}>
           <ItemDetailsHOC wrapped={ItemDetails} {...props} {...itemInfo}></ItemDetailsHOC>  
        </ErrorBoundary>
}