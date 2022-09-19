import React, {useEffect, useState } from 'react';

export const Timer = () => {
    const [second, setSecond]=useState("0")
    let hours = new Date().getHours().toString()
    let minutes = new Date().getMinutes().toString()
    useEffect(()=>{
        setInterval(()=>{
            setSecond(new Date().getSeconds().toString())
        }, 1000)
    },[second])
    return (
        <div>{hours}:{minutes}:{second}</div>
    );
};

