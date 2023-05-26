import React from 'react';
import style from "./items.module.css";
import ItemContainer from "./Item/ItemContainer";
import {NavLink} from "react-router-dom";


const Items = (props) => {
    return (
        <div>
            <p className={style.title}>Goods for you</p>
            <main className={style.wrapper}>{props.items.map(e => <ItemContainer key={e.id} item={e}/>)}</main>
            <div className={style.showMore}>
                <NavLink className={style.link} to={"/allProducts"}>Show more</NavLink>
            </div>
        </div>
    );
}

export default Items;