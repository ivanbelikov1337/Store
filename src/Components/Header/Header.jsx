import React from 'react';
import style from "./header.module.css"
import ShowOrders from "./OrderBasket/ShowOrders/ShowOrders";
import ShowNothing from "./OrderBasket/ShowNothing/ShowNothing";
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import UserLog from "./UserLog/UserLog";

const Header = (props) => {
    return (
        <>
            <header>
                <div className={style.container}>
                    <NavLink to={""} className={style.logo}>House Shop</NavLink>
                    <Navigation isAuthAdmin={props.isAuthAdmin} isAuth={props.isAuth}
                                handleChangeCard={props.handleChangeCard} items={props.items}
                                handleChangeUser={props.handleChangeUser} userOpen={props.userOpen}/>
                    {props.cardOpen && (
                        <div className={style.shoppCard}>{props.items.length > 0 ?
                            <ShowOrders isClickData={props.isClickData} handleChangeCard={props.handleChangeCard}
                                        items={props.items}/> : <ShowNothing/>}</div>)}
                    {props.userOpen && (
                        <UserLog userOpen={props.userOpen} handleChangeMyAccount={props.handleChangeMyAccount}
                                 handleChangeLogOut={props.handleChangeLogOut}/>)}</div>
            </header>
        </>
    );
}

export default Header;