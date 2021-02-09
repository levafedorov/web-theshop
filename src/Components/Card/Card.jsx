import React from 'react'
import {Card, Button} from "react-bootstrap";

export default function Item({title, price, description, image}) {
    return (
            <Card>
                <Card.Img variant="top" src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2020/05/Ferret-Pet-Talk.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="card__add-box">
                            <Button variant="secondary">Add to cart</Button>               
                            <div className="card__price text-primary"> 100 $</div>
                         </div>
                    </Card.Body>
            </Card>
       
    )
}
