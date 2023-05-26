import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addToCard, deleteInCard, getTenExperience,} from "../../../Redux/Other/action";
import Item from "./Item";
import ShowFullItem from "../ShowFullItem/ShowFullItem";


const ItemContainer = (props) => {
    const dispatch = useDispatch()

    const [isAdded, setIsAdded] = useState(false)


    const addToOrder = () => {
        dispatch(addToCard(props.item))
        dispatch(getTenExperience())
        setIsAdded(true)
    }
    let [fullShow, setFullShow] = useState(false)
    const handleChangeFullItem = () => {
        setFullShow(!fullShow)
    }

    const deleteOrder = () => {
        setIsAdded(false)
        dispatch(deleteInCard(props.item.id))
    }


    return (
        <div>
            {fullShow &&
                <ShowFullItem deleteOrder={deleteOrder} isAdded={isAdded} handleChangeFullItem={handleChangeFullItem}
                              addToOrder={addToOrder} item={props.item}/>}
            <Item deleteOrder={deleteOrder} isAdded={isAdded} handleChangeFullItem={handleChangeFullItem}
                  item={props.item} addToOrder={addToOrder}/>
        </div>
    );
}

export default ItemContainer;