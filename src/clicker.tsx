import React from "react";

type TypeClicker = {
    increase: () => void
    reset: () => void
    count: number
    maxValue:number
    minValue:number
    set:()=>void
    settings:boolean
}
const Clicker = (props: TypeClicker) => {
    const displayNone = {
        display:'none'
    }
    const displayBlock = {
        display:'block'
    }
    return <div className='clicker' style={props.settings?displayBlock:displayNone} >

        <div>
            <button onClick={props.increase} disabled={props.count >= props.maxValue ? true : false}
                    className='btnInc'>Inc
            </button>
        </div>
        <div>
            <button onClick={props.reset} disabled={props.count <= props.minValue ? true :false }
                    className='btnReset'>Reset
            </button>
        </div>
        <div>
            <button onClick={props.set}
                    className='btnSet'>Set
            </button>
        </div>

    </div>

}
export default Clicker;