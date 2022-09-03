import React from "react";

type ItemType ={
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed:(collapsed: boolean)=>void
    items: ItemType[]
    onClick: (value: any)=> void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} collapsed={props.collapsed} setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed:(collapsed: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h1 onClick={()=>{props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h1>
}

type AccordionBodyPropsType ={
    items: ItemType[]
    onClick: (value: any)=> void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {
            props.items.map((el, index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)
        }
        <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2" selected>Значение 2</option>
            <option value="value3">Значение 3</option>
        </select>
    </ul>
}

export  default Accordion;