import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from "react-bootstrap";
import ItemsFilter from "../ItemsFilter/ItemsFilter";
import Item from "../Card/Card";
import {useSelector, shallowEqual} from "react-redux";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {changePage} from "../../Redux/actions/itemsActions";
import HOCItem from "../HOC/AddToCartHOC";

export default function ItemPlace() {
    
  
    const page = useSelector(state => state.items.page);
    
    const dispatch = useDispatch();

    const handlerMoreBtn = (e) => {
        dispatch(changePage(page + 1));
      }
    
    
    const {items, sort} = useSelector(state => state.items, shallowEqual);
    let displayed;
    
    if(items.length !== 0){ 
      if(sort === '?sort=lowest'){
        displayed = items.sort( (a, b) => a.price - b.price);
      }else if(sort === '?sort=highest'){
        displayed = items.sort( (a, b) => b.price - a.price);
      }
      
      displayed = items.map(
        ({title, price, description, image, id}, i) => <HOCItem wrapped={Item} key={`key-${i}`} title={title} price={price} description={description} image={image} id={id}/>
      );
       
    }else{
      displayed = <LoadingIcon />;      
    }
    
    //   
    // items.length !== 0 ?
    // items.map(({title, price, description, image}, i) => <Item key={`key-${i}`} title={title} price={price} description={description} image={image}/>) :
    //  

    // if(sort === 'lowest'){
    //   displayed = displayed.sort( (a, b) => a.price - b);
    // }

    return (
        <section className="item-place">
          <ItemsFilter/>  
          <div className="item-place__items bg-light">
            {displayed}  
            <Button className="item-place__more-btn" onClick={handlerMoreBtn}>MORE...</Button> 
          </div>
        </section>
    )
}




