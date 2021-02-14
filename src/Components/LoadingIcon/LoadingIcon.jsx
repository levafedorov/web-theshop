import React from 'react';
import {Spinner} from "react-bootstrap";

export default function LoadingIcon() {
    return (
        <div className="loading-icon"> 
            <Spinner animation="border"/>
        </div> 
    )
}
