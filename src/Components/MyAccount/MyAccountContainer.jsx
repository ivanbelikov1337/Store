import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userIsAuth,} from "../../Redux/Other/action";
import MyAccount from "./MyAccount";

const MyAccountContainer = (props) => {
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    let [error, setError] = useState(false)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.myAccountReducer.isAuth)
    const isAuthAdmin = useSelector(state => state.myAccountReducer.isAuthAdmin)

    const handleChangeInputLog = (e) => {
        e.preventDefault()
        setLogin(e.target.value)

    }
    const handleChangeInputPas = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const fakeLog = (e) => {
        e.preventDefault()
        if (newDataRegister.newTextInput === login && newDataRegister.newPasswordInput === password) {
            dispatch(userIsAuth())
        } else {
            setError(true)
        }
    }
    const newDataRegister = useSelector(state => state.myAccountReducer.signIn)
    return (
        <>
            <MyAccount  error={error} isAuth={isAuth}  isAuthAdmin={isAuthAdmin}
                        handleChangeInputLog={handleChangeInputLog}
                        handleChangeInputPas={handleChangeInputPas}
                        fakeLog={fakeLog}
            />
        </>
    );
}

export default MyAccountContainer;