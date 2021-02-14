import React from 'react'
import {Container, Button} from "react-bootstrap";
import Comments from "../Comments/Comments";
import ItemRating from "./ItemRating";


export default function ItemDetails() {
    return (
        <section className="item-details">
            <Container>
                <div className="item-details__top">
                <div className="item-details__top-left">
                   <div className="item-details__image-box">
                       <img src="https://www.nihilist.li/wp-content/uploads/2019/06/Naruto_Part_1.png" alt="image" className="item-details__image"/>
                  </div>
                  <div className="item-details__item-bar">
                      <h2 className="item-details__items-name bg-dark text-white">Some item</h2>
                       <div className="item-details__add-and-price bg-light">
                          <div className="item-details__price text-primary">100$</div>
                          <Button variant="secondary" className="item-details__buy-btn">Add to cart</Button>
                       </div>
                  </div>
                </div>
                <div className="item-details__top-right">
                    <article className="item-details__info-content">
                        <h2 className="item-details__info-header">
                        Some item
                        </h2>
                        <p className="item-details__p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Sequi blanditiis impedit 
                            accusantium esse nihil iure vero 
                            eius itaque, mollitia neque repellat eum non ex ea velit aut. Omnis, soluta ullam?
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Pariatur, laudantium 
                            asperiores. Facere iste iure dolores rerum distinctio 
                            eveniet aspernatur perspiciatis.
                        </p>
                    </article>
                    <ItemRating />
                </div>
                </div>
            </Container>
            <Container>
                <div className="item-details__bottom">
                   <Comments />
                </div>
            </Container>
        </section>
    )
}
