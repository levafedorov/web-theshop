import {React, useState} from 'react'
import ReactDOM from 'react-dom';
import {XSquare} from "react-bootstrap-icons";
import Registration from "../Registration"; 
import {regToggler} from "../../../Redux/actions/itemsActions";
import {useDispatch} from "react-redux";

const rootModal = document.getElementById('root-modal');

export default function ModalRegistration() {
    
    const [loading, setloading] = useState(false);
    const [completed, setCompleted] = useState(true);
    const dispatch = useDispatch();

    const sendData = (data) => {
        setloading(true)
        //sendData
        
    }


    const switchOff = e => {
        dispatch(regToggler());
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

