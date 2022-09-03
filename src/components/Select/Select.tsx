import React, { useState } from 'react';
import styles from './Select.module.css';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] =useState(false)
    const [hoveredElementValue, setHoveredElementValue] =useState(props.value)
    debugger
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const ToggleItems = ()=> {
        setActive(!active)
    }
    const onItemClick = (value: any)=>{
        props.onChange(value);
        ToggleItems();
    }
    return (
        <div className={styles.select} onKeyPress={()=>{}} tabIndex={0}>
            <span className={styles.main} onClick={ToggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                        className={styles.item + " " + (hoveredItem === i ? styles.selected: "")}
                        key={i.value}
                        onClick={()=>onItemClick(i.value)}>{i.title}</div>)}
                </div>
            }
        </div>
    );
};

