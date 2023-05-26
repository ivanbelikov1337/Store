import React from 'react';
import style from "./contacts.module.css"
import Image from "../../img/Contact-us-mobile-hand.jpg";
import {BsFillSendCheckFill} from "react-icons/bs";
import SocialImage from "./SocialImage/SocialImage";
import {MdErrorOutline} from "react-icons/md";

const Contacts = (props) => {
    return (
        <>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Contact Us</h2>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src={Image} alt="contact"/>
                    </div>
                    <div className={style.column}>
                        <form>
                            <label>First Name</label>
                            <input onChange={(e) => props.handleChangeInput("firstName", e)}
                                   type="text" name="firstname" placeholder="Your name.."
                                   value={props.newContacts.firstName || ""}/>
                            <label>Last Name</label>
                            <input onChange={(e) => props.handleChangeInput("lustName", e)}
                                   type="text" name="lastname" placeholder="Your last name.."
                                   value={props.newContacts.lustName || ""}/>
                            <label htmlFor="country">Country</label>

                            <label htmlFor="subject">Subject</label>
                            <textarea onChange={(e) => props.handleChangeInput("subject", e)}
                                      name="subject" placeholder="Write something.."
                                      value={props.newContacts.subject || ""}>
                            </textarea>
                            <input onClick={props.handleChangeSubmit} type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                {props.switcher ? <div className={style.successfully}>
                    <BsFillSendCheckFill size={40}/>
                    <p>Your message has been sent</p>
                </div> : null}
                {props.switcherError ? <div className={style.successfullyError}>
                    <MdErrorOutline color={"red"} size={40}/>
                    <p>All data must be entered</p>
                </div> : null}
                <SocialImage/>
            </div>
        </>
    )
}

export default Contacts