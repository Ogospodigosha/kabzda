import React from 'react';
import s from './OnOff.module.css';

export const OnOffBody = () => {
    return (
        <div className={s.onOffWrapper}>
            <div className={s.on}>On</div>
            <div className={s.off}>Off</div>
            <div className={s.circle}></div>
        </div>
    )
};

