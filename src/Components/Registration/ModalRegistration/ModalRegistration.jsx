import {React, useState} from 'react'
import ReactDOM from 'react-dom';
import {XSquare} from "react-bootstrap-icons";
import Registration from "../Registration"; 


const rootModal = document.getElementById('root-modal');

export default function ModalRegistration({switchOff}) {
    
    const [loading, setloading] = useState(false);
    const [completed, setCompleted] = useState(true);
    
    const sendData = (data) => {
        setloading(true)
        //sendData
        
    }
 
    return (
        ReactDOM.createPortal((
            <div className="custom-modal">
                        <div className="custom-modal__box">
                         <div className="custom-modal__off-bar bg-light" onClick={switchOff}>
                             <span><XSquare size="24"/></span>
                        </div>
                        <Registration sendData/> 
                        </div>   
           </div>
        ), rootModal)
        
    )
}



ModalRegistration.defaultPorps ={
    switchOff: () => {}
}