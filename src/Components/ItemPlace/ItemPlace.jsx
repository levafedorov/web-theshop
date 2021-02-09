import React from 'react'
import {CardDeck} from "react-bootstrap";
import ItemsFilter from "../ItemsFilter/ItemsFilter";
import Item from "../Card/Card";

export default function ItemPlace(props) {
    

    const {items} = props;
    return (
        <section className="item-place">
          <ItemsFilter/>  
          <div className="item-place__items bg-light">
                  {items.map((item, i) => <Item key={`key-${i}`}/>)} 
          </div>
        </section>
    )
}




ItemPlace.defaultProps = {
    items: [1, 2, 3, ,4, 5, 6, 7]
}