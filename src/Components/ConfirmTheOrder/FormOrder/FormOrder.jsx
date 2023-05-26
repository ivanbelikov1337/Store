import React from 'react';
import style from "../confirmTheOrder.module.css";

const FormOrder = (props) => {
    return (
        <div className={style.wrapperForm}>
            <form>
                <div>
                    <p className={style.name}>FIRST NAME</p>
                    <input onChange={(e) => props.handleChangeInput("firstName", e)}
                           value={props.newOrder.firstName || ""}
                           className={style.input} name="FirstName" placeholder="Please enter first name..."/>
                </div>
                <div>
                    <p className={style.name}>LAST NAME</p>
                    <input onChange={(e) => props.handleChangeInput("lustName", e)}
                           value={props.newOrder.lustName || ""}
                           className={style.input} name="Last Name" placeholder="Please enter last name..."/>
                </div>
                <div>
                    <p className={style.name}>PHONE NUMBER</p>
                    <input onChange={(e) => props.handleChangeInput("inputNumber", e)}
                           value={props.newOrder.phoneNumber || ""}
                           className={style.input} name="PhoneNumber" type={"number"}
                           placeholder="Please enter phone number..."/>
                </div>
            </form>
        </div>
    );
}

export default FormOrder;