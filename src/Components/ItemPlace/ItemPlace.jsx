import React from 'react'
import {CardDeck} from "react-bootstrap";
import ItemsFilter from "../ItemsFilter/ItemsFilter";
import Item from "../Card/Card";
import {useSelector, shallowEqual} from "react-redux";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

export default function ItemPlace() {
    
    // title, price, description, image
    const items = useSelector(state => state.items.items, shallowEqual);
    
    const diplayed = items !== undefined ?
    items.map(({title, price, description, image}, i) => <Item key={`key-${i}`} title={title} price={price} description={description} image={image}/>) :
    <LoadingIcon /> 

    return (
        <section className="item-place">
          <ItemsFilter/>  
          <div className="item-place__items bg-light">
            {diplayed}   
          </div>
        </section>
    )
}




