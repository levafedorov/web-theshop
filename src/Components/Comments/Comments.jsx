import React from 'react';
import Comment from "./Comment";
import AddComment from "./AddComment";

export default function Comments() {
    return (
        <section className="comments">
            <AddComment />
            <div className="comments__displayed">
                <Comment /> 
                <Comment /> 
                <Comment /> 
            </div>
             
        </section>
    )
}
