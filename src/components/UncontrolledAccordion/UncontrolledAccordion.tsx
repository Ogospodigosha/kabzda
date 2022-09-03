import React, {useReducer, useState} from 'react';
type AccordionPropsType = {
    titleValue: string
}
type ActionType={
    type: string
}
const reduser =(state: boolean, action: ActionType) =>{
    //по каким-то правилам изменяет стейт и выплевывает измененный стейт
    if (action.type ==="TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    //let [collapsed, dispatch] =useState(false)
    let [collapsed, dispatch] =useReducer(reduser, false)
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: "TOGGLE-COLLAPSED"})}}/>
        {!collapsed && <AccordionBody/>}
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


