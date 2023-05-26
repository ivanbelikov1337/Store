import React, {useEffect} from 'react';
import Items from "./Items";
import {useDispatch, useSelector} from "react-redux";
import {getDateItems} from "../../Redux/Other/action";


const ItemsContainer = (props) => {
    const dispatch = useDispatch()


    const items = useSelector(state => state.itemsReducer.items)


    useEffect(() => {
        dispatch(getDateItems())
    },[dispatch])

    return (
        <div>
            <Items items={items}/>
        </div>
    );
}

export default ItemsContainer;