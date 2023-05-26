import React from 'react';
import style from "./item.module.css"
import {BsCheckCircleFill} from 'react-icons/bs';


const Item = (props) => {

    return (
        <div className={style.item}>
            <div className={style.head}>
                <img className={style.img} onClick={props.handleChangeFullItem} src={props.item.image} alt=""/>
                <p className={style.title}>{props.item.title}</p>
            </div>
            <div className={style.items}>
                <p className={style.description}>{props.item.description}</p>
                <p className={style.category}>Category: {props.item.category}</p>
                <p className={style.price}> {props.item.price} $</p>
                {props.isAdded ?
                    <div onClick={props.deleteOrder} className={style.addedCard}>
                        <BsCheckCircleFill color={"green"} size={36}/></div> :
                    <div className={style.addCard} onClick={props.addToOrder}>+</div>
                }
            </div>
        </div>
    );
}

export default Item;