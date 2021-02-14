import React from 'react';
import {Carousel} from "react-bootstrap";

export default function Carusel() {
    return (
        <Carousel className="carousel-top" >
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100"
                src="https://www.marni.com/ytos/resources/MARNI/images/img_teaser.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100"
                src="https://www.960fashion.com/wp-content/uploads/2017/11/Basic-guide-clothing-stores.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                className="d-block w-100"
                src="https://img.alicdn.com/imgextra/i2/6000000002199/O1CN01RAYm7n1S7BSi2QxiG_!!6000000002199-0-tbvideo.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
