import React from 'react';
import style from './cardItems.module.css'
import { MdDeleteForever } from 'react-icons/md';


const CardItems = (props) => {
    return (
        <div className={style.wrapper}>
            <div><img className={style.img} src={props.item.image} alt=""/></div>
          <div className={style.card}>
              <p className={style.title}>Name: {props.item.title}</p>
              <p className={style.category}>Category: {props.item.category}</p>
              <p className={style.price}>{props.item.price}$</p>
          </div>
            <div className={style.delete} onClick={props.deleteOrder}><MdDeleteForever size={60}/></div>
        </div>
    );
}

export default CardItems;