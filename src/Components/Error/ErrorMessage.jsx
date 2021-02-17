import React from 'react';
import {Link} from "react-router-dom";

export default function ErrorMessage({userMessage, errorMessage, url}) {
    
    console.error("error stack:", errorMessage);
    

    return (
        
        <div className="error-message bg-danger text-light border border-dark">
        <Link to={url}>
           <div className="p-3">
           {userMessage}
           </div>
        </Link>
        </div> 
    )
}



ErrorMessage.defaultProps = {
    userMessage: "default error message",
}