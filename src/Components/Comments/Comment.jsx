import React from 'react'

export default function Comment() {
    return (
        <div className="comments__comment">
            <div className="comments__image-box">
                <img src="https://specials-images.forbesimg.com/imageserve/1018280982/960x0.jpg?fit=scale" alt="" className="comments__image"/>
            </div>
            <div className="comments__info-box">
                    <div className="comments__top-info">
                        <div className="comments__name">
                           Anonimus
                        </div>
                        <div className="comments__date">
                            12-10-2020
                        </div>
                    </div>
                <p className="comments__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Dolorem doloribus 
                    numquam placeat aperiam nam harum quo, ea cumque a error.
                </p>
            </div>
        </div>
    )
}
