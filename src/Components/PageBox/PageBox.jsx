import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from "react-router-dom";

export default function PageBox({children}) {
    return (
        <div className="page-box">
            <div className="page-box__central-box">
                <Breadcrumb>
                <Link to="/">
                     Home
                </Link>    
                /Cart
                </Breadcrumb>
                    <div className="page-box__content">
                    {children}
                    </div>
            </div>
        </div>
    )
}
