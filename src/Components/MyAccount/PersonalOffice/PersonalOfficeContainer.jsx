import React from 'react';
import PersonalOffice from "./PersonalOffice";
import  {useSelector} from "react-redux";
import {nanoid} from "nanoid";
const PersonalOfficeContainer = (props) => {
    const newItemOrderHistory = useSelector(state => state.ordersReducer.ItemHistory)
    const newDataRegister = useSelector(state => state.myAccountReducer.signIn)
    const getLevelUser = useSelector(state => state.myAccountReducer.levelUser)
    return (
        <PersonalOffice newItemOrderHistory={newItemOrderHistory} newDataRegister={newDataRegister}
                        getLevelUser={getLevelUser} nanoid={nanoid}
        />
    );
}

export default PersonalOfficeContainer;