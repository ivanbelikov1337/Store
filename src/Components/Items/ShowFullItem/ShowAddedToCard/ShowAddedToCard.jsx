import React from 'react';
import style from "./showAddedToCard.module.css"


const ShowAddedToCard =(props) => {
    return (
        <div className={style.addedCard}><p>Added to cart</p></div>
    );
}

export default ShowAddedToCard;