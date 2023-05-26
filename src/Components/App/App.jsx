import style from './app.module.css'
import Home from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import AllProductsContainer from "../AllProducts/AllProductsContainer";
import ConfirmTheOrderContainer from "../ConfirmTheOrder/ConfirmTheOrderContainer";
import MyAccountContainer from "../MyAccount/MyAccountContainer";
import Setting from "../Setting/Setting";
import Footer from "../Footer/Footer";
import PrivacyPolicy from "../Privacy Policy/Privacy Policy";
import Services from "../Services/Services";
import ContactsContainer from "../Contacts/ContactsContainer";
import BlogContainer from "../Blog/BlogContainer";
import SignUpContainer from "../MyAccount/SignUp/SignUpContainer";


function App() {

    return (
        <>
            <div className={style.wrapper}>
                <HeaderContainer/>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/contacts" element={<ContactsContainer/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/myAccount" element={<MyAccountContainer/>}/>
                    <Route path="/confirmTheOrder" element={<ConfirmTheOrderContainer/>}/>
                    <Route path="/allProducts" element={<AllProductsContainer/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/blog" element={<BlogContainer/>}/>
                    <Route path="/signUp" element={<SignUpContainer/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default App;
