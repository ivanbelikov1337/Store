import React from 'react';
import style from "../../header.module.css";
import CardItemsContainer from "../CardItems/CardItemsContainer";
import {NavLink} from "react-router-dom";


const ShowOrders = (props) => {
    return (
        <div>
            <div className={style.wrapper}>
                <div>{props.items.map(r => <CardItemsContainer isClickData={props.isClickData}
                                                               key={r.id} item={r}/>)}
                </div>
                <NavLink onClick={props.handleChangeCard} className={style.creatOrder} to={"/confirmTheOrder"}>
                    Creat Order
                </NavLink>
            </div>
        </div>
    );
}

export default ShowOrders;

