import React from 'react'

export default function Comment({name, date, text, sympathy}) {

    let bgColor;
    if(sympathy === null){
        bgColor = "cornflowerblue";
    }else if(sympathy === "like"){
        bgColor = "#20c997";
    }else if(sympathy === "dislike"){
        bgColor = "#dc3545";
    }

    return (
        <div className="comments__comment">
            <div className="comments__image-box">
                <img src="https://specials-images.forbesimg.com/imageserve/1018280982/960x0.jpg?fit=scale" alt="" className="comments__image"/>
            </div>
            <div className="comments__info-box" style={{backgroundColor: bgColor}}>
                    <div className="comments__top-info">
                        <div className="comments__name">
                           {name}
                        </div>
                        <div className="comments__date">
                            {date}
                        </div>
                    </div>
                <p className="comments__text">
                   {text}
                </p>
            </div>
        </div>
    )
}


Comment.defaultProps = {
    name: "Default Name",
    date: "12-11-12",
    text: "It is a default text.",
    sympathy: null
}