import {combineReducers} from "redux";
import {itemsReducer} from "../Reducers/itemsReducer";
import {ordersReducer} from "../Reducers/ordersReducers";
import {myAccountReducer} from "../Reducers/myAccountReducer";
import {contactReducer} from "../Reducers/contactReducer";
import {postReducer} from "../Reducers/postReducer";



export const rootReducers = combineReducers({
    itemsReducer,
    ordersReducer,
    myAccountReducer,
    contactReducer,
    postReducer
})

export default rootReducers