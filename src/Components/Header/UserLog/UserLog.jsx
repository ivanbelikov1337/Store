import React from 'react';
import style from "../header.module.css";
import {NavLink} from "react-router-dom";
import {GrLogout} from "react-icons/gr";
import {IoSettingsSharp} from "react-icons/io5";

const UserLog = (props) => {
    return (
        <>
            <div className={style.userCard}>
                <div onClick={props.handleChangeMyAccount}>
                    <NavLink to={"/myAccount"}>My Account</NavLink>
                </div>
                <NavLink to={"/setting"} onClick={props.handleChangeMyAccount} className={style.setting}>
                    <p>Setting</p>
                    <IoSettingsSharp size={20}/>
                </NavLink>
                <NavLink to={"/myAccount"} onClick={props.handleChangeLogOut} className={style.logOut}>
                    <p>Log ut</p>
                    <GrLogout size={20}/>
                </NavLink>
            </div>
        </>
    );
}

export default UserLog;