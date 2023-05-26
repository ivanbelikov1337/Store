import React from 'react';
import style from "./showNothing.module.css"


const ShowNothing =(props) =>  {
    return (
        <div>
            <h2 className={style.text}>No products found</h2>
        </div>
    );
}

export default ShowNothing;