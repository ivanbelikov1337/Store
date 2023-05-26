import React from 'react';
import style from "./showAddToCard.module.css"
import {useSelector} from "react-redux";


const ShowAddToCard = (props) =>  {

    return (

        <div className={style.addCard}><p>Add to cart</p></div>
    );
}

export default ShowAddToCard;