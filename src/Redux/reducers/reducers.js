import {combineReducers} from "redux";



const initialItemsReducer = {
    items: [],
    item: {}
}

const itemsReducer = (state = initialItemsReducer, action) => {
    switch(action.type){
        case "GET_ALL_ITEMS": 
        return {
            ...state,
            items: action.payload
        }
        default: return state; 
    }
}


export default combineReducers({
    items: itemsReducer
});