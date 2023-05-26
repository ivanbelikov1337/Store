import React, {useEffect, useState} from 'react';
import Contacts from "./Contacts";
import {useDispatch, useSelector} from "react-redux";
import {creatContact, getFiftiethExperience} from "../../Redux/Other/action";


const ContactsContainer = (props) => {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState("")
    const [lustName, setLustName] = useState("")
    const [subject, setSubject] = useState("")
    const [switcher, setSwitcher] = useState(false)
    const [switcherError, setSwitcherError] = useState(false)


    const handleChangeInput = (status, e) => {
        switch (status) {
            case "firstName":
                return setFirstName(e.target.value)
            case "lustName":
                return setLustName(e.target.value)
            case "subject":
                return setSubject(e.target.value)
            default:
                return status
        }
    }

    useEffect(() => {
        dispatch(creatContact(firstName, lustName, subject))
    }, [dispatch, firstName, lustName, subject]);

    const handleChangeSubmit = (e) => {
        e.preventDefault()
        if (firstName.length && lustName.length && subject.length > 0) {
            setFirstName("")
            setLustName("")
            setSubject("")
            setSwitcher(true)
            dispatch(getFiftiethExperience())
            setTimeout(() => {
                setSwitcher(false)
            }, 3500);
        } else {
            setSwitcherError(true)
            setTimeout(() => {
                setSwitcherError(false)
            }, 3500);
        }

    }

    const newContacts = useSelector(state => state.contactReducer.contactData)


    return (
        <Contacts handleChangeInput={handleChangeInput} newContacts={newContacts}
                  handleChangeSubmit={handleChangeSubmit} switcher={switcher}
                  switcherError={switcherError}/>
    );
}

export default ContactsContainer;