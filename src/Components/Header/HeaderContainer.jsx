import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import Header from "./Header";
import {levelUp, resetExperience, userAminLogOut, userLogOut} from "../../Redux/Other/action";


const HeaderContainer = (props) => {
    const dispatch = useDispatch()
    let [cardOpen, setCardOpen] = useState(false)
    let [userOpen, setUserOpen] = useState(false)

    const handleChangeCard = () => {
        setCardOpen(cardOpen = !cardOpen)
        setUserOpen(false)
    }
    const handleChangeUser = () => {
        setUserOpen(userOpen = !userOpen)
        setCardOpen(false)
    }
    const handleChangeLogOut = () => {
        dispatch(userLogOut())
        dispatch(userAminLogOut())
        setUserOpen(false)
    }
    const handleChangeMyAccount =() => {
        setUserOpen(false)
    }
    const isClickData = useSelector(state => state.ordersReducer.added)
    const items = useSelector(state => state.ordersReducer.orders)
    const isAuth = useSelector(state => state.myAccountReducer.isAuth)
    const isAuthAdmin = useSelector(state => state.myAccountReducer.isAuthAdmin)
    const getExperience = useSelector(state => state.myAccountReducer.experience)
    useEffect(() => {
        if (getExperience >= 100){
            dispatch(levelUp())
            dispatch(resetExperience())
        }
    },[dispatch, getExperience])

    return (
        <div>
            <Header  isClickData={isClickData} isAuthAdmin={isAuthAdmin} isAuth={isAuth}
                    cardOpen={cardOpen} handleChangeCard={handleChangeCard} items={items}
                    userOpen={userOpen} handleChangeUser={handleChangeUser} setCardOpen={setCardOpen}
                    handleChangeLogOut={handleChangeLogOut} handleChangeMyAccount={handleChangeMyAccount}
            />
        </div>
    );
}

export default HeaderContainer;