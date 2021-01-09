import React from "react";
import './App.css';

type TypeCouneter = {
    counter: number
}
const Counter = (props: TypeCouneter) => {
    return <div>
        <div className='counter'>
            <div className={props.counter === 5 ? 'countRed' : 'count'}>{props.counter}</div>
        </div>
    </div>
}
export default Counter;