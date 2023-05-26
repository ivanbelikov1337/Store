import React from 'react';
import style from "./setting.module.css"

const Setting = (props) => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <p className={style.title}>Settings</p>
                    </div>
                    <div className={style.cardBody}>
                        <div className={style.container}>
                            <div className={style.grid}>
                                <p>About</p>
                            </div>
                        </div>
                        <div className={style.container}>
                            <div className={style.grid}>
                                <p>General</p>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Start at login</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Hide window at start up</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Keep window visible as bg app</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Keep window above other apps</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Show icon in dock</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Hide &quot;Unlock Extreme&quot; button</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <h3>Desktop Status Menu</h3>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Use precentages</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Icon visible</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.grid}>
                                <h3>Performance</h3>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Threshold level</label>
                                    <div className={style.formItemControl}><small><strong><span
                                    >500</span><span>mb</span></strong></small></div>
                                    <div className={style.slider}>
                                        <input className={style.sliderInput} type="range"  min="0" max="1000"/>
                                    </div>
                                </div>
                                <p><small>If the available memory goes below this amount, the status bar text will
                                    turn red.</small></p>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Auto clean</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <p><small>Automatically clean when available memory drops below the above threshold.
                                    Auto clean is limited to once every 3 minutes.</small></p>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Disable auto clean cooldown</label>
                                    <div className={`${style.formItemControl} ${style.toggle}`}>
                                        <div className={style.toggleHandle}></div>
                                    </div>
                                </div>
                                <p><small>Auto clean cooldown: <strong>136 seconds</strong></small></p>
                                <div className={style.formItem}>
                                    <label className={style.formItem}>Refresh interval</label>
                                    <div className={style.formItemControl}>
                                        <small><strong><span>5</span><span>&nbsp;seconds</span></strong></small>
                                    </div>
                                    <div className={style.slider}>
                                        <input className={style.sliderInput} type="range"  min="0" max="20"/>
                                    </div>
                                </div>
                                <p><small>If the available memory goes below this amount, the status bar text will
                                    turn red.</small></p>
                                <div className={style.buttons}>
                                    <button className={style.button}>Done</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Setting;
