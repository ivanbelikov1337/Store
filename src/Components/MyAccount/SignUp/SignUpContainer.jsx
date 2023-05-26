import React, {useEffect, useState} from 'react';
import SignUp from "./SignUp";
import {useDispatch} from "react-redux";
import {getFiftiethExperience, registerData} from "../../../Redux/Other/action";

const SignUpContainer = (props) => {

    const [textInput, setTextInput] = useState("")
    const [textNameInput, setTextNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [validPass, setValidPass] = useState(false)
    const [switcher, setSwitcher] = useState(false)
    const dispatch = useDispatch()

    const handleChangeInput = (status, e) => {
        switch (status) {
            case "textInput":
                return setTextInput(e.target.value)
            case "textNameInput":
                return setTextNameInput(e.target.value)
            case "emailInput":
                return setEmailInput(e.target.value)
            case "passwordInput":
                return setPasswordInput(e.target.value)
            default:
                return status
        }

    }

    const handleClick = (e) => {
        e.preventDefault()
        const isValidEmail = emailInput.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

        if (isValidEmail) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
        if (passwordInput.length >= 8) {
            setValidPass(false)
            dispatch(registerData(textInput, emailInput, passwordInput, textNameInput))
            dispatch(getFiftiethExperience())
            setPasswordInput("")
            setEmailInput("")
            setTextInput("")
            setTextNameInput("")
            setSwitcher(true)
            setTimeout(() => {
                setSwitcher(false)
            }, 3500);
        } else {
            setValidPass(true)
        }


    }

    useEffect(() => {

    }, [validEmail, validPass]);
    return (
        <SignUp handleClick={handleClick} handleChangeInput={handleChangeInput} switcher={switcher}
                validPass={validPass}   validEmail={validEmail} passwordInput={passwordInput}
                emailInput={emailInput} textNameInput={textNameInput} textInput={textInput}
        />

    );
}

export default SignUpContainer;