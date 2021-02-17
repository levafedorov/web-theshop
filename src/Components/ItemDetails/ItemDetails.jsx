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


 function ItemDetails({match}){
    const dispatch = useDispatch();
   
    console.log(match.params.id);

    useEffect(() => {
        dispatch(clearItem());
        dispatch(getItem(match.params.id))
    }, []);
   
    const itemInfo = useSelector(state => state.items.item, );

    return (
        <section className="item-details">
            <Container>
                <div className="item-details__top">
                  {itemInfo === undefined ? <LoadingIcon /> :
                    <>
                    <div className="item-details__top-left">
                   <div className="item-details__image-box">
                       <img src={itemInfo.image} alt="image" className="item-details__image"/>
                  </div>
                  <div className="item-details__item-bar">
                      <h2 className="item-details__items-name bg-dark text-white">{itemInfo.title}</h2>
                       <div className="item-details__add-and-price bg-light">
                          <div className="item-details__price text-primary">{itemInfo.price}$</div>
                          <Button variant="secondary" className="item-details__buy-btn">Add to cart</Button>
                       </div>
                  </div>
                </div>
                <div className="item-details__top-right">
                    <article className="item-details__info-content">
                        <h2 className="item-details__info-header">
                        {itemInfo.title}
                        </h2>
                        <p className="item-details__p">
                           {itemInfo.description}
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
                {itemInfo === undefined ? <LoadingIcon /> : <Comments />}
                </div>
            </Container>
            <ScrollToTop />
        </section>
    )
}



export default function ItemDetailsWithErrorHandler(props){
    return <ErrorBoundary url={props.match.url}><ItemDetails {...props} /></ErrorBoundary>
}