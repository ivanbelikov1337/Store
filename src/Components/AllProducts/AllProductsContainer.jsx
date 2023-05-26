import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDateAllItems} from "../../Redux/Other/action";
import AllProducts from "./AllProducts";

const AllProductsContainer = (props) =>  {

    const dispatch = useDispatch()
    const items = useSelector(state => state.itemsReducer.items)
    const [filtered, setFiltered] = useState(items)

    useEffect(() => {
        dispatch(getDateAllItems())
    }, [dispatch]);

    const filterCategory = (status) => {
        switch (status) {
            case "all":
                return setFiltered(items)
            case "men's clothing":
                const newMensCategory = [...items].filter(item => item.category === status)
                return setFiltered(newMensCategory)
            case "jewelery":
                const newJeweleryCategory = [...items].filter(item => item.category === status)
                return setFiltered(newJeweleryCategory)
            case "electronics":
                const newElectronicsCategory = [...items].filter(item => item.category === status)
                return setFiltered(newElectronicsCategory)
            case "women's clothing":
                const newWomenCategory = [...items].filter(item => item.category === status)
                return setFiltered(newWomenCategory)
            default:
                return status
        }
    }

    return (
        <>
            <AllProducts items={items}  filtered={filtered} filterCategory={filterCategory}  />
        </>
    );
}

export default AllProductsContainer;