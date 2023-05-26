import React from 'react';
import style from "./navigation.module.css"
import ShowBasket from "../OrderBasket/ShowBasket/ShowBasket";
import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {GrUserAdmin} from 'react-icons/gr';
import {FaUserCircle} from 'react-icons/fa';


const Navigation = (props) => {
    return (
        <div>
            <ul className={style.nav}>
                {props.items.length > 0 ?
                    <ShowBasket handleChangeCard={props.handleChangeCard} className={style.shopp}/> :
                    <FaShoppingCart size={30} onClick={props.handleChangeCard} className={style.shopp}/>
                }
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                             to={""}>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                             to={"/aboutUs"}>About us
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                             to={"/contacts"}>Contacts
                    </NavLink>
                </li>
                <li>
                    {props.isAuthAdmin ?
                        <div onClick={props.handleChangeUser}>
                            <GrUserAdmin size={30}/>
                        </div> :
                        props.isAuth ?
                            <div onClick={props.handleChangeUser}>
                                <FaUserCircle size={30}/>
                            </div> :
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/myAccount"}>My account
                            </NavLink>
                    }
                </li>
            </ul>
        </div>
    );
}

export default Navigation;