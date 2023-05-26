import React from 'react';
import style from "../../allProducts.module.css";

const CategoriesButtons = (props) => {
    return (
        <div>
            <div className={style.buttonGroup}>
                <button  onClick={() => props.filterCategory("all")} className={style.button}>
                    All products
                </button>
                <button  onClick={() => props.filterCategory("men's clothing")} className={style.button}>
                    Men's clothing
                </button>
                <button  onClick={() => props.filterCategory("jewelery")} className={style.button}>
                    Jewelery
                </button>
                <button  onClick={() => props.filterCategory("electronics")} className={style.button}>
                    Electronics
                </button>
                <button  onClick={() => props.filterCategory("women's clothing")} className={style.button}>
                    Women's clothing
                </button>
            </div>
        </div>
    );
}

export default CategoriesButtons;