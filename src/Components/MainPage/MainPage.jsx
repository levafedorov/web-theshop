import React from 'react'
import ItemPlace from "../ItemPlace/ItemPlace";
import {Container} from "react-bootstrap";
import CartMini from "../CartMini/CartMini";
import {Carousel} from "react-bootstrap";

export default function MainPage() {
    return (
        <main className="main-page mb-5">
            <div className="main-page__top bg-dark">
            <Carousel className="carousel-top" >
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="https://www.marni.com/ytos/resources/MARNI/images/img_teaser.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="https://www.960fashion.com/wp-content/uploads/2017/11/Basic-guide-clothing-stores.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="https://img.alicdn.com/imgextra/i2/6000000002199/O1CN01RAYm7n1S7BSi2QxiG_!!6000000002199-0-tbvideo.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
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
