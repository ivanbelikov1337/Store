import React from 'react';
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import PersonalOfficeContainer from "./PersonalOffice/PersonalOfficeContainer";


const MyAccount = (props) => {
    return (
        <>
            {props.isAuthAdmin  ? <Admin/> :
                props.isAuth ? <PersonalOfficeContainer/>  :
                    <Login handleChangeInputPas={props.handleChangeInputPas}
                           handleChangeInputLog={props.handleChangeInputLog}
                           fakeLog={props.fakeLog} error={props.error}
                    />
            }
        </>
    );
}

export default MyAccount;