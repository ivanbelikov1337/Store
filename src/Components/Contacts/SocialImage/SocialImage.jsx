import React from 'react';
import style from "./socialImagem.module.css"


const SocialImage = (props) => {
    return (
        <div>
            <div className={style.socialMediaLinks}>
                <img className={style.linkImg}
                     src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                     alt={""}/>
                <img className={style.linkImg}
                     src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                     alt={""}/>
                <img className={style.linkImg}
                     src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                     alt={""}/>
                <img className={style.linkImg}
                     src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                     alt={""}/>
            </div>
        </div>
    );
}

export default SocialImage;