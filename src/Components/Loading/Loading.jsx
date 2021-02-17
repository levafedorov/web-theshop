import React from 'react';
import LoadingIcon from "../LoadingIcon/LoadingIcon";


export default function Loading({isloading}) {
    return (
        <>
        {   
            isLoading ? <div className="loading-container"><LoadingIcon/></div> : null
            
        }
        </>
    )
}
