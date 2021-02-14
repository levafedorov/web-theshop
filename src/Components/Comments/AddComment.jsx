import React from 'react';
import {Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AddComment() {
    return (
        <div className="comments__add-comments">
        <Form className="comments__from">
            <Form.Group controlId="formGroupComment">
                <Form.Label className="comments__label">
                Insert text here:
                </Form.Label>
                <Form.Control as="textarea" rows="3" className="comments__input">
               </Form.Control>
          </Form.Group>
          <fieldset className="comments__like-dislike">
          <label htmlFor="like" className="comments__likedislike-label">
            <FontAwesomeIcon icon="heart" color="red" size="2x"/>
             <input type="radio" id="like" className="comments__likedislike-input" name="like"/>
          </label>
          <label htmlFor="dislike" className="comments__likedislike-label">
           <FontAwesomeIcon icon="heart-broken" size="2x"/>
             <input type="radio" id="dislike" className="comments__likedislike-input" name="like"/>
          </label>
          </fieldset>
          <Button>Post</Button>
          <hr/>
        </Form>
        </div>
    )
}
