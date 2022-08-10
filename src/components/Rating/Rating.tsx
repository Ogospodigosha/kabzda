import React from "react";

type RatingPropsType = {
    value: number
    onClick:(value: number) =>void
}

export function Rating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")
        return (
            <div>
                <Star selected={props.value > 0} value={1} onClick={()=>{props.onClick(1)}}/>
                <Star selected={props.value >1} value={2} onClick={()=>{props.onClick(2)}}/>
                <Star selected={props.value >2} value={3} onClick={()=>{props.onClick(3)}}/>
                <Star selected={props.value >3} value={4} onClick={()=>{props.onClick(4)}}/>
                <Star selected={props.value >4} value={5} onClick={()=>{props.onClick(5)}}/>
            </div>
    )
}

type StarPropsType= {
    selected: boolean
    onClick: (value: number)=>void
    value: number
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={()=>{props.onClick(props.value)}}>{props.selected ? <b>star </b>: " star"}</span>

}