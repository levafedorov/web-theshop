import React from 'react';
import {Table, Button} from 'react-bootstrap';


export default function SectionMainCart() {
    return (
        <section className="section-main-cart">
            <div className="section-main-cart__headers">
                <div className="section-main-cart__headers-image">Image</div>
                <div className="section-main-cart__headers-title">Title</div>
                <div className="section-main-cart__headers-price">Price</div>
            </div>
            <div className="section-main-cart__table-container">
            <Table striped bordered hover className="section-main-cart__table">
        <tbody>
        <tr td className="section-main-cart__body-tr">
            <td className="section-main-cart__image-td"><img 
            src="https://pbs.twimg.com/profile_images/823569976342773760/c2RLAG7h_400x400.jpg" 
            alt="item image" 
            width="100" 
            height="150"/>
            </td>
            <td className="section-main-cart__body-td section-main-cart__body-td--title">Thornton asd asd</td>
            <td className="section-main-cart__body-td section-main-cart__body-td--price">100$</td>
            <td className="section-main-cart__body-td section-main-cart__body-td--options">
               <input type="number" className="section-main-cart__amount"/> <Button className="bg-danger">X</Button>
            </td>
        </tr>
        </tbody>
        </Table>
        </div>
               <div className="section-main-cart__order">
                   <span className="section-main-cart__total">Total: {200}$</span>
                    <Button className="section-main-cart__next">Order</Button>
                </div>  
                </section>
    )
}
