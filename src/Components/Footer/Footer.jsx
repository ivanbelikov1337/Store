import React from 'react';
import style from "./footer.module.css"
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <>
            <div className={style.footerBasic}>
                <footer>
                    <ul className={style.list}>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={""}>Home
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/services"}>Services
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/aboutUs"}>About us
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/blog"}>Blog
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/contacts"}>Contacts
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)}
                                     to={"/privacyPolicy"}>Privacy policy
                            </NavLink>
                        </li>
                    </ul>
                    <p className={style.copyright}>Company Name &copy; 2023</p>
                </footer>
            </div>
        </>
    );
}
export default Footer;

