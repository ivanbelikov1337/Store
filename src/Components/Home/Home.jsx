import React from 'react';
import ItemsContainer from "../Items/ItemsContainer";
import style from "./home.module.css";


const Home = (props) => {
    return (
        <>
            <div className={style.presentation}></div>
            <ItemsContainer/>
        </>
    );
}

export default Home;