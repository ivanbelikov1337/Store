import React from 'react';
import style from "./signUp.module.css"
import {BsFillSendCheckFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const SignUp = (props) => {

    return (
        <div className={style.signup}>
            <div className={style.signupConnect}>
                <h1>Create your account</h1>
                <p className={` ${style.btn} ${style.btnSocial} ${style.btnFacebook}`}><i
                    className={` ${style.fa}`}></i> Sign in with
                    Facebook</p>
                <p className={` ${style.btn} ${style.btnSocial} ${style.btnTwitter}`}><i className={style.fa}></i> Sign
                    in with
                    Twitter</p>
                <p className={` ${style.btn} ${style.btnSocial} ${style.btnGoogle}`}><i className={style.fa}></i> Sign
                    in with
                    Google</p>
                <p className={` ${style.btn} ${style.btnSocial} ${style.btnLinkedin}`}><i className={style.fa}></i> Sign
                    in with
                    Linkedin</p>
            </div>
            <div className={style.signupClassic}>
                <h2>Or use the classical way</h2>
                <form>
                    <div>
                        <input onChange={(e) => props.handleChangeInput("textInput", e)}
                               autoComplete={"off"} type="text" placeholder="username" value={props.textInput || ""}/>
                    </div>
                    <div>
                        <input onChange={(e) => props.handleChangeInput("textNameInput", e)}
                               autoComplete={"off"} type="text" placeholder="name" value={props.textNameInput || ""}/>
                    </div>
                    <div>
                        {props.validEmail ? <p className={style.errorEmail}>Invalid Email</p> : null}
                        <input onChange={(e) => props.handleChangeInput("emailInput", e)}
                               autoComplete={"off"} type="email" placeholder="email" value={props.emailInput || ""}/>
                    </div>
                    <div>
                        {props.validPass ? <p className={style.errorEmail}>Short a password</p> : null}
                        <input onChange={(e) => props.handleChangeInput("passwordInput", e)}
                               autoComplete={"off"} type="password" placeholder="password" value={props.passwordInput || ""}/>
                    </div>
                    <button onClick={props.handleClick} type="submit" className={style.btnSubmit}>sign up</button>
                    <div className={style.logIn}><NavLink className={style.logInLink} to={"/myAccount"}>Log in</NavLink>
                    </div>
                </form>
            </div>
            {props.switcher ? <div className={style.successfully}>
                <BsFillSendCheckFill size={40}/>
                <p>Now you can login</p>
            </div> : null}
        </div>
    );
}

export default SignUp;