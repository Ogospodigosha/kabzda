import React, {useEffect, useState} from 'react';

type ItemType = {
    title: string
    value: any
}
type MySelectPropsType = {
    items: ItemType[]
}

export const MySelect = (props: MySelectPropsType) => {
    let [currentValue, setCurrentValue] = useState(props.items[0].title)
    let [collapsed, setCollapsed] = useState(false)
    const onClickHandler = (title: string) => {
        debugger
        if (title === currentValue) {
            setCollapsed(!collapsed)
        }
        setCurrentValue(title)
    }
    useEffect(() => {
        debugger
        setCollapsed(!collapsed)
    }, [currentValue])
    const clickHandler = () => {
        debugger
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <h3 onClick={clickHandler}>{currentValue}</h3>
            {!collapsed && props.items.map(el => <div onClick={() => onClickHandler(el.title)}>{el.title}</div>)}
        </div>
    );
};

