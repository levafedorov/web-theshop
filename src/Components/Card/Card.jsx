import React from 'react'
import {Card, Button, ButtonGroup} from "react-bootstrap";
import {cutString} from "../../functions/functions";

export default function Item({title, price, description, image}) {
    return (
            <Card>
                <Card.Img variant="top" src={image} height="400" className="card__image"/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          {cutString(description, 20)}
                        </Card.Text>
                        <div className="card__add-box">
                          <ButtonGroup>
                            <Button variant="secondary">To item</Button>  
                            <Button variant="secondary">Add to cart</Button>  
                          </ButtonGroup>           
                            <div className="card__price text-primary">{price}$</div>
                        </div>
                    </Card.Body>
            </Card>
       
    )
}


Item.defaultProps = {
    title: "default",
    price: 999,
    description: "Some deafult description",
    image: "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2020/05/Ferret-Pet-Talk.jpeg"
}