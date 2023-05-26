import React from 'react';
import style from "./aboutUs.module.css"
import photoFirst from '../../img/tall-celebrity-men13-1.jpg'
import photoSecond from '../../img/ben-affleck-recording-artists-and-groups-photo-u103.jpeg'
import photoThree from '../../img/chris-pratt-photo-u47.jpeg'

const AboutUs = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.aboutSection}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <p className={style.teamTitle}>Our Team</p>
            <div className={style.row}>
                <div className={style.column}>
                    <div className={style.card}>
                        <img src={photoFirst} alt="Jane" />
                            <div className={style.container}>
                                <h2>Jane Doe</h2>
                                <p className="title">CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p>
                                    <button className={style.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.card}>
                        <img src={photoSecond} alt="Mike" />
                            <div className={style.container}>
                                <h2>Mike Ross</h2>
                                <p className="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p>
                                    <button className={style.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>

                <div className={style.column}>
                    <div className={style.card}>
                        <img src={photoThree} alt="John" />
                            <div className={style.container}>
                                <h2>John Doe</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>
                                    <button className={style.button}>Contact</button>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default AboutUs;