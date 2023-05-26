import React from 'react';
import style from "./orderHistoryItems.module.css"


const OrderHistoryItems = (props) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={props.items.image} alt=""/>
            <p className={style.title}>{props.items.title}</p>
            <p>{props.items.price}$</p>
        </div>
    );
}

export default OrderHistoryItems;