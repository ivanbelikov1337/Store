import React from 'react';
import style from "./showFullItem.module.css"
import {AiFillLike} from "react-icons/ai"
import {FcRating} from "react-icons/fc"
import ShowAddToCard from "./ShowAddToCard/ShowAddToCard";
import ShowAddedToCard from "./ShowAddedToCard/ShowAddedToCard";


const ShowFullItem = (props) => {
    return (
        <div className={style.wrapper} onClick={props.handleChangeFullItem}>
            <div className={style.item}>
                <div className={style.head}>
                    <img className={style.img} onClick={props.handleChangeFullItem} src={props.item.image} alt=""/>
                    <p className={style.title}>{props.item.title}</p>
                </div>
                <div className={style.items}>
                    <p className={style.description}>{props.item.description}</p>
                    <div className={style.wrapperPrice}>
                        <p className={style.category}>Category: {props.item.category}</p>
                        <p className={style.price}> {props.item.price} $</p>
                    </div>
                    <div>
                        {props.isAdded ? <div onClick={props.deleteOrder}><ShowAddedToCard/></div> :
                            <div onClick={props.addToOrder}><ShowAddToCard/></div>}
                    </div>
                </div>
                <div className={style.likesRate}>
                    <p className={style.rate}><FcRating size={30}/>{props.item.rating.rate}</p>
                    <p className={style.likes}><AiFillLike size={30}/>{props.item.rating.count}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowFullItem;