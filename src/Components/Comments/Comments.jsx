import React from 'react';
import Comment from "./Comment";
import AddComment from "./AddComment";
import {useState} from "react";

export default function Comments() {
    
    const [comments, setComments] = useState([
        {  name: "Anonimus",
           date: new Date().toDateString(),
           text: `Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Dolorem 
           doloribus numquam placeat aperiam nam harum quo, ea cumque a error.`,
           sympathy: null
        },
        {  name: "Anonimus",
           date: new Date().toDateString(),
           text: `Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Dolorem 
           doloribus numquam placeat aperiam nam harum quo, ea cumque a error.`,
           sympathy: null
        },
        {  name: "Anonimus",
           date: new Date().toDateString(),
           text: `Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Dolorem 
           doloribus numquam placeat aperiam nam harum quo, ea cumque a error.`,
           sympathy: null
        }
   ]);

  const handleComment = (obj) => {
    const arr = [...comments];
    arr.unshift(obj)   
    setComments(arr);
  }


    return (
        <section className="comments">
            <AddComment handleComment={handleComment}/>
            <div className="comments__displayed">
                {comments.map(({name, date, text, sympathy}, i) => <Comment key={`key-${i}`} name={name} date={date} text={text} sympathy={sympathy}/>)}
            </div>
             
        </section>
    )
}
