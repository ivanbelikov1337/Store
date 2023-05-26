import React from 'react';
import style from "./login.module.css"
import Error from "../Error/Error";
import {NavLink} from "react-router-dom";


const Login = (props) => {
    return (
        <>
            <div className={style.container}>
                <main className={style.mainHolder}>
                    <p className={style.login}>Login</p>
                    <div>
                        {props.error ? <Error/> : null}
                    </div>
                    <form className={style.loginForm}>
                        <input type="text" name="username" className={style.loginFormField}
                               onChange={props.handleChangeInputLog} placeholder="Username" autoComplete="off"/>
                        <input type="password" name="password" className={style.loginFormField}
                               onChange={props.handleChangeInputPas} placeholder="Password" autoComplete="off"/>
                        <button onClick={props.fakeLog} className={style.loginFormSubmit}>Login</button>
                        <NavLink className={style.register} to={"/signUp"}>Sign up</NavLink>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login;