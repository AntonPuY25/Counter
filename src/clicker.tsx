import React from "react";

type TypeClicker = {
    increase: () => void
    reset: () => void
    count: number
}
const Clicker = (props: TypeClicker) => {
    return <div className='clicker'>

        <div>
            <button onClick={props.increase} disabled={props.count >= 5 ? true : false}
                    className='btnInc'>Inc
            </button>
        </div>
        <div>
            <button onClick={props.reset} disabled={props.count === 0 ? true : false}
                    className='btnReset'>Reset
            </button>
        </div>


    </div>

}
export default Clicker;