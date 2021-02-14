import reducers from "./reducers/reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const initialState = {
    items: [],
    
}


const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
    );

export default store;