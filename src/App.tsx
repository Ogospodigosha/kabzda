import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] =useState(0)
    let [accordionCollapsed, setAccordionCollapsed]=useState(false)
    let [on, setOn] = useState(false)
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title = {"This is APP component"}/>
            <PageTitle title = {"Users"}/>
            Article 1
            {/*<Rating value ={ratingValue} />*/}
            <UncontrolledAccordion titleValue ={"Menu"} />
            <UncontrolledAccordion titleValue ={"Users"} />
            Article 2
            <Accordion titleValue={"lalala"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledRating />
            <Rating  value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value ={2}/>*/}
            {/*<Rating value ={3}/>*/}
            {/*<Rating value ={4}/>*/}
            {/*<Rating value ={5}/>*/}
            <UncontrolledOnOff />
            <UncontrolledOnOff/>
            <OnOff onClick={setOn} value={on}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType){
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
