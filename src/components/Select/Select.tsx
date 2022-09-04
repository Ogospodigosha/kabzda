import React, { useState, KeyboardEvent, useEffect } from 'react';
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
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }

                }
            }
        }
        if(e.key ==="Enter" || e.key ==="Escape") {
            setActive(false)
        }
    }
    const ToggleItems = ()=> {
        setActive(!active)
    }
    const onItemClick = (value: any)=>{
        props.onChange(value);
        ToggleItems();
    }
    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
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

