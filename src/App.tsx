import React, {useState} from 'react';
import './App.css';
import Counter from "./counter";
import Clicker from "./clicker";
import SettingsCounter from "./settingsCounter/settingsCounter";
import SettingsClicker from "./settingsCounter/settingsClicker";

function App() {
    let [count, setCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    let [settings, setSettings] = useState<boolean>(true)
    const setMax = (value: number) => {
        setMaxValue(value)
    }
    const setMin = (value: number) => {
        setMinValue(value)
    }
    const setValue = () => {
        setSettings(!settings)
        setCount(minValue)
    }
    const inc = () => {
        setCount(count + 1)
    }
    const reset = () => {

        setCount(minValue)
    }
    const set = () => {
        setSettings(!settings)
    }
    return (<div className='Main'>
            <Counter counter={count} maxValue={maxValue} settings={settings}/>
            <Clicker increase={inc} reset={reset} count={count}
                     maxValue={maxValue} minValue={minValue} set={set} settings={settings}/>
            <SettingsCounter maxValue={maxValue} setMax={setMax}
                             setMin={setMin} minValue={minValue} settings={settings}/>
            <SettingsClicker maxValue={maxValue} minValue={minValue}
                             setValue={setValue} settings={settings}/>
        </div>


    );
}

export default App;
