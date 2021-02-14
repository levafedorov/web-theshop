import {React,  useEffect, useState}from 'react'
import ItemPlace from "../ItemPlace/ItemPlace";
import {Container} from "react-bootstrap";
import CartMini from "../CartMini/CartMini";
import Carousel from "../Carousel/Carousel";



export default function MainPage() {
    

    return (
        <main className="main-page">
            <div className="main-page__top bg-dark">
            <Carousel />
            <CartMini/>
            </div>
            <div className="main-page__bottom">
                <div className="main-page__new-items">
                    <Container>
                        {/* <h2 className="main-page__title u-margin-bottom-big">New Items.</h2> */}
                        < ItemPlace/>
                    </Container> 
                </div>      
            </div>  
        </main>
    )
}
