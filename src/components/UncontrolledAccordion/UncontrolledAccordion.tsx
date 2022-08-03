import React, {useState} from 'react';
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed] =useState(true)
    const onClickHandler=(collapsed: boolean)=>{
        setCollapsed(collapsed)

    }
    return <div>
        <AccordionTitle title={props.titleValue}/> <button onClick={()=>onClickHandler(!collapsed)}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h1>{props.title}</h1>
}


function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


