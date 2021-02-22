import {combineReducers} from "redux";



const initialItemsReducer = {
    items: [],
    item: undefined,
    category: "",
    sort: "?sort=asc",
    page: 1
}

const itemsReducer = (state = initialItemsReducer, action) => {
    switch(action.type){
        case "GET_BIT_OF_ITEMS": 
        return {
            ...state,
            items: action.payload
        }
        
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        
        case "CHANGE_SORT":    
            return {
                ...state,
                sort: action.payload
            }
        
        case "CHANGE_PAGE":
            return {
                ...state,
                page: action.payload
            }

        case "CLEAR_ALL_ITEMS":
            return {
                ...state,
                items: []
            }

        case "ITEM_CLEAR":
            return {
                ...state,
                item: undefined
            }  
        
        case "ITEM_GET":
            return {
                ...state,
                item: action.payload
            }        
    
        default: return state; 
    }
}


const initialUserReducer =  null;
  

 const userReducer = (state = initialUserReducer, action) => {
        switch(action.type){
           case "USER_LOGIN":
               return {
                 ...action.payload
               }
               
           case "USER_LOGOUT":
               return null

           default: return state; 
        }
   }





const initialGeneralReducer = {
    loading: false,
    reg:false                          
                               }

const generalReducer = (state = initialGeneralReducer, action) => {
     switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                loading: !state.loading
            }    
        
        case "REG_OPEN_CLOSE":
            return {
                ...state,
                reg: !state.reg
            }      

        default: return state; 
     }
}



const initialCart = null;

const cartReducer = (state = initialCart, action) => {
     switch(action.type){
       case "ADD_ITEMS_TO_CART":
           return{
              ...action.payload
           }
       case "CLEAR_CART":
            return null
        default: return state; 
     }
     
}




export default combineReducers({
    items: itemsReducer,
    user: userReducer,
    cart: cartReducer,
    general: generalReducer,
});