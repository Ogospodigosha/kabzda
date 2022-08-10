import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")
    let [value, setValue] = useState(1)
    const onClickHandler = (value: number)=>{
        setValue(value)
    }
        return (
            <div>
                <Star selected={value >0} onClick={()=>onClickHandler(1)}/>
                <Star selected={value >1} onClick={()=>onClickHandler(2)}/>
                <Star selected={value >2} onClick={()=>onClickHandler(3)}/>
                <Star selected={value >3} onClick={()=>onClickHandler(4)}/>
                <Star selected={value >4} onClick={()=>onClickHandler(5)}/>
            </div>
    )
}

type StarPropsType= {
    selected: boolean
    onClick: ()=>void

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={()=>props.onClick()}>{props.selected? <b>star </b> : " star"}</span>

}