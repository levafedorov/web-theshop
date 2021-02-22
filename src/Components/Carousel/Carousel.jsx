import React from 'react';
import {Carousel} from "react-bootstrap";

export default function Carusel() {
    return (
        <Carousel className="carousel-top" >
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100 carousel__image"
                src="https://www.marni.com/ytos/resources/MARNI/images/img_teaser.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100 carousel__image"
                src="https://www.960fashion.com/wp-content/uploads/2017/11/Basic-guide-clothing-stores.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100 carousel__image"
                src="https://www.lux-review.com/wp-content/uploads/2020/10/fashion-store.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
