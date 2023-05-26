import React from 'react';
import style from "./confirmTheOrder.module.css"
import {BsFillBagCheckFill} from 'react-icons/bs';
import {MdErrorOutline} from 'react-icons/md';
import FormOrder from "./FormOrder/FormOrder";
import ItemOrder from "./ItemOrder/ItemOrder";

const ConfirmTheOrder = (props) => {
    return (
        <div>
            <div className={style.title}>Your order</div>
            <div className={style.wrapper}>
                <ItemOrder items={props.items} calcPrice={props.calcPrice}/>
                <FormOrder handleChangeInput={props.handleChangeInput} newOrder={props.newOrder}/>
            </div>
            <div className={style.wrapperButton}>
                <button className={style.submitBtn} onClick={props.handleChangeTextArea}>Confirm your order</button>
            </div>
            {props.switcher ? <div className={style.successfully}>
                <BsFillBagCheckFill size={40}/>
                <p>The order successfully</p>
            </div> : null}
            {props.switcherError ? <div className={style.successfullyError}>
                <MdErrorOutline color={"red"} size={40}/>
                <p>All data must be entered</p>
            </div> : null}
        </div>
    );
}

export default ConfirmTheOrder;