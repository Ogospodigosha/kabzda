import React, {useReducer} from 'react';
import {reduser, TOGGLE_CONSTANT} from "./Reduser";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    //let [collapsed, dispatch] =useState(false)
    let [state, dispatch] =useReducer(reduser, {collapsed: false})
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h1 onClick={()=>{props.onClick()}}>{props.title}</h1>
}


function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


