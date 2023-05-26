import React, {useEffect, useState} from 'react';
import ConfirmTheOrder from "./ConfirmTheOrder";
import {useDispatch, useSelector} from "react-redux";
import {clearOrder, creatItemOrderHistory, creatOrder, getFiftiethExperience} from "../../Redux/Other/action";

const ConfirmTheOrderContainer = (props) => {

    const [inputFirstName, setInputFirstName] = useState("")
    const [inputLustName, setInputLustName] = useState("")
    const [inputPhoneNumber, setInputPhoneNumber] = useState("")
    const [switcher, setSwitcher] = useState(false)
    const [switcherError, setSwitcherError] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state => state.ordersReducer.orders)

    const handleChangeTextArea = (e) => {
        //POST request
        if (newOrder.firstName.length && newOrder.lustName.length && newOrder.phoneNumber.length && items.length > 0) {
            setSwitcher(true)
            setTimeout(() => {
                setSwitcher(false)
            }, 3500);
            dispatch(clearOrder())
            dispatch(creatItemOrderHistory(items))
            dispatch(getFiftiethExperience())
            setInputFirstName("")
            setInputLustName("")
            setInputPhoneNumber("")
        }   else {
            setSwitcherError(true)
            setTimeout(() => {
                setSwitcherError(false)
            }, 3500);
        }

    }

    const handleChangeInput = (params, e) => {
        switch (params) {
            case "firstName":
                return setInputFirstName(e.target.value)

            case "lustName":
                return setInputLustName(e.target.value)

            case "inputNumber":
                return setInputPhoneNumber(e.target.value)

            default:
                return params
        }
    }

    useEffect(() => {
        dispatch(creatOrder(inputFirstName, inputLustName, inputPhoneNumber))
    }, [dispatch, inputFirstName, inputLustName, inputPhoneNumber]);


    const calcPrice = (item) => {
        return item.reduce((accumulator, items) => {
            return accumulator + items.price;
        }, Number(0));
    };

    const newOrder = useSelector(state => state.ordersReducer.createOrder)

    return (
        <div>
            <ConfirmTheOrder   switcher={switcher} items={items}
                               handleChangeTextArea={handleChangeTextArea}
                               handleChangeInput={handleChangeInput}
                               calcPrice={calcPrice} newOrder={newOrder}
                               switcherError={switcherError}
            />
        </div>
    );
}

export default ConfirmTheOrderContainer;