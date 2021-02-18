import React from 'react';
import {Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';


export default function AddComment({handleComment, nick}) {

    const [sympathy, setSympathy] = useState(null);
    const [text, setText] = useState("");

    const handleSympathy = ({target: {dataset : {info}}}) => {
      console.log(info);
       setSympathy(info);
    }
    
   const activeBg = {backgroundColor: "#6c757d"}
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const newText = text.trim();
      if(newText !== ""){
        handleComment({
          sympathy, 
          text: newText, 
          date: new Date().toDateString(), 
          name: nick}
          );
          setSympathy(null);
          setText("");
      }
   }

    return (
        <div className="comments__add-comments">
        <Form className="comments__from" onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupComment">
                <Form.Label className="comments__label">
                Insert text here:
                </Form.Label>
                <Form.Control as="textarea" rows="3" className="comments__input" onChange={({target: {value}}) => setText(value)} value={text}>
               </Form.Control>
          </Form.Group>
          <fieldset className="comments__like-dislike">
          <label htmlFor="like" className="comments__likedislike-label" style={sympathy === "like" ? activeBg : null}>
            <FontAwesomeIcon icon="heart" color="red"/>
             <input type="radio" id="like" className="comments__likedislike-input" name="like" data-info="like" onChange={handleSympathy}/>
          </label>
          <label htmlFor="dislike" className="comments__likedislike-label" style={sympathy === "dislike" ? activeBg : null}>
           <FontAwesomeIcon icon="heart-broken"/>
             <input type="radio" id="dislike" className="comments__likedislike-input" name="like" data-info="dislike" onChange={handleSympathy}/>
          </label>
          </fieldset>
          <Button type="submit">Post</Button>
          <hr/>
        </Form>
        </div>
    )
}


AddComment.defaultProps = {
  handleComment: () => console.log("function in props is missing")
}