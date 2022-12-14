import React, {useState} from 'react';

type onOffPropsType = {
    onClick: (value: boolean)=>void
    value: boolean
}

export const OnOff = (props: onOffPropsType) => {

    const onStyle = {
        margin: '20px',
        marginRight: '0px',
        width: '100px',
        height: '50px',
        border: '5px solid black',
        lineHeight: '45px',
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        margin: '20px',
        marginLeft: '5px',
        width: '100px',
        height: '50px',
        border: '5px solid black',
        lineHeight: '45px',
        backgroundColor: props.value ? "white" : "red"

    }
    const indicatorStyle = {
        margin: '20px',
        width: '50px',
        height: '50px',
        border: '5px solid black',
        borderRadius: '50%',
        backgroundColor: props.value ? "green" : "red"
    }
    const onOffWrapper = {
        display: 'flex'
    }

    return (
        <div style={onOffWrapper}>
            <div style={onStyle} onClick={() => {props.onClick(!props.value)}}>On</div>
            <div style={offStyle} onClick={() =>{props.onClick(!props.value)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}




