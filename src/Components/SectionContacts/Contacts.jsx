import React from 'react';
import {Container} from "react-bootstrap";
import { Google, Twitter, Instagram, Facebook, Telegram} from 'react-bootstrap-icons';

export default function Contacts() {
    return (
        <section className="contacts">
           <div className="contacts__top-image"></div>
           <Container className="contacts__container">
                   <article className="contacts__text">
                       <h2 className="contacts__header text-primary">
                           Contacts
                       </h2>
                       <ul className="contacts__list">
                           <li className="contacts__item">
                               <span className="contacts__left">Phone number:</span>
                               <span className="contacts__right"><a href="tel:#">775543193</a></span>
                            </li>
                           <li className="contacts__item">
                               <span className="contacts__left">EMail:</span>
                               <span className="contacts__right"><a href="mailto:abc@example.com">seznam@example.lol</a></span>
                           </li>
                           <li className="contacts__item">
                               <span className="contacts__left">Social Medias:</span>
                               <span className="contacts__right"><div className="contacts__medias">
                                    <a href="#"><Google/></a>
                                    <a href="#"><Twitter/></a>
                                    <a href="#"><Instagram/></a>
                                    <a href="#"><Facebook/></a>
                                    <a href="#"><Telegram/></a>
                         </div></span>  
                           </li>
                       </ul>
                   </article>
           </Container>
        </section>
    )
}
