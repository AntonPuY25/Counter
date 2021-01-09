import React from "react";
import './App.css';

type TypeCouneter = {
    counter: number
    maxValue:number
    settings:boolean
}
const Counter = (props: TypeCouneter) => {
    const displayNone = {
        display:'none'
    }
    const displayBlock = {
        display:'block'
    }
    return <div>
        <div className='counter' style={props.settings?displayBlock:displayNone}>
            <div className={props.counter === props.maxValue ? 'countRed' : 'count'}>{props.counter}</div>
        </div>
    </div>
}
export default Counter;