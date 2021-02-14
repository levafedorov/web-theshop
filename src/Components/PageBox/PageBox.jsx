import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function PageBox({children}) {
    return (
        <div className="page-box">
            <div className="page-box__central-box">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                    <div className="page-box__content">
                    {children}
                    </div>
            </div>
        </div>
    )
}
