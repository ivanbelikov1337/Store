import React from 'react';
import style from "./error.module.css"


const Error = (props) => {
    return (
        <div className={style.loginErrorMsgHolder}>
           <p className={style.loginErrorMsg}>
               Incorrect Password or Login
           </p>
        </div>
    );
}

export default Error;