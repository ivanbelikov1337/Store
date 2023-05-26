import React from 'react';
import basket from "../../../../img/icons8-basket.gif"
import style from "./showBasket.module.css"
const ShowBasket = (props) => {
    return (
        <div>
            <img onClick={props.handleChangeCard} className={style.icon} src={basket} alt=""/>
        </div>
    );
}

export default ShowBasket;