import React from 'react';
import style from "../confirmTheOrder.module.css";
import CardItemsContainer from "../../Header/OrderBasket/CardItems/CardItemsContainer";

const ItemOrder = (props) => {
    return (
        <div className={style.items}>
            {props.items.length > 0 ?
                <div className={style.wrapperCard}>{props.items.map(r => <CardItemsContainer key={r.id} item={r}/>)}</div> :
                <p className={style.itemsNot}>Order not found</p>
            }
            {props.items.length > 0 ? <p className={style.totalPrice}>Total price
                <span className={style.totalPriceMoney}>{props.calcPrice(props.items)}$</span></p> : null
            }
        </div>
    );
};

export default ItemOrder;
