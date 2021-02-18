import {React, useState} from 'react'
import ReactDOM from 'react-dom';
import {XSquare} from "react-bootstrap-icons";
import Registration from "../Registration"; 
import {regToggler, login} from "../../../Redux/actions/itemsActions";
import {useDispatch} from "react-redux";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";


const rootModal = document.getElementById('root-modal');

export default function ModalRegistration() {
    
    const [loading, setloading] = useState(false);
    const [completed, setCompleted] = useState(false);
    
    const dispatch = useDispatch();


    const sendData = ({dataUser, dataCard}) => {
        setloading(true);
        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify(dataUser)); 
            dispatch(login(dataUser));
            setloading(false);
            setCompleted(true);
            setTimeout(() => {
                dispatch(regToggler());
            }, 3000);
        }, 1500); 
    }


    const switchOff = e => {
        dispatch(regToggler());
    }
    
    let displayed;
    if(loading && !completed){
        displayed = <LoadingIcon />
    }else if(!loading && completed){
        displayed = <div className="custom-modal__registred-text text-primary">Registred</div>
    }else{
        displayed = (
        <>
            <div className="custom-modal__off-bar bg-light" onClick={switchOff}>
                <span><XSquare size="24"/></span>
            </div>
                <Registration sendData={sendData}/> 
        </>
        )
    }

    return (
        ReactDOM.createPortal((
            <div className="custom-modal">
                        <div className="custom-modal__box">
                         {displayed}
                        </div>   
           </div>
        ), rootModal)
        
    )
}

