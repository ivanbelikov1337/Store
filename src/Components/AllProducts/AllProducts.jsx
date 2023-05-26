import React from 'react';
import style from "./allProducts.module.css"
import ItemContainer from "../Items/Item/ItemContainer";
import CategoriesButtons from "./Categories/CategoriseButtons/CategoriesButtons";


const AllProducts = (props) => {

    return (
        <div>
            <CategoriesButtons  filterCategory={props.filterCategory}/>
            <div className={style.wrapperItem}>
                {props.filtered.length === 0 ? props.items.map(e => <ItemContainer key={e.id} item={e}/>) :
                    props.filtered.map(e => <ItemContainer key={e.id} item={e}/>)}
            </div>
        </div>

    );
}

export default AllProducts;