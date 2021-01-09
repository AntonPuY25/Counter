import React, {useState} from 'react';
import './App.css';
import Counter from "./counter";
import Clicker from "./clicker";

function App() {
    let [count, setCount] = useState<number>(0)
    const inc = () => {
        setCount(count + 1)
    }
    const reset = () => {

        setCount(0)
    }
    return (<div className='Main'>
            <Counter counter={count}/>
            <Clicker increase={inc} reset={reset} count={count}/>
        </div>


    );
}

export default App;
