import React from 'react';
import CardItems from "./CardItems";
import {useDispatch} from "react-redux";
import {deleteInCard, isDeleteOrder,} from "../../../../Redux/Other/action";

const CardItemsContainer = (props) => {
    const dispatch = useDispatch()

    const deleteOrder = () => {
        dispatch(deleteInCard(props.item.id))
    }
    return (
        <div>
            <CardItems item={props.item} deleteOrder={deleteOrder}/>
        </div>
    );
}

export default CardItemsContainer;