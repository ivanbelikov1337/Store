import React from 'react';
import  style from "./services.module.css"


const Services = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h2>Services</h2>
                <section className={style.services}>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>ZARA</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>NIKE</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>PUMA</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>ADIDAS</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>H&M</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.content}>
                            <div className={style.icon}></div>
                            <div className={style.title}>ASOS</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Services;
