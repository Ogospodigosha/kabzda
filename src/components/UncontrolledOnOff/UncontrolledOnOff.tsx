import React, {useState} from 'react';

type onOffPropsType = {}

export const UncontrolledOnOff = (props: onOffPropsType) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        margin: '20px',
        marginRight: '0px',
        width: '100px',
        height: '50px',
        border: '5px solid black',
        lineHeight: '45px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        margin: '20px',
        marginLeft: '5px',
        width: '100px',
        height: '50px',
        border: '5px solid black',
        lineHeight: '45px',
        backgroundColor: on ? "white" : "red"

    }
    const indicatorStyle = {
        margin: '20px',
        width: '50px',
        height: '50px',
        border: '5px solid black',
        borderRadius: '50%',
        backgroundColor: on ? "green" : "red"
    }
    const onOffWrapper = {
        display: 'flex'
    }
    const onclickHandler = (on: boolean) => {
        setOn(on)
    }
    return (
        <div style={onOffWrapper}>
            <div style={onStyle} onClick={() => onclickHandler(true)}>On</div>
            <div style={offStyle} onClick={() => onclickHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}




