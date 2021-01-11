import React, {useState} from 'react';
import './App.css';
import Counter from "./counter";
import Clicker from "./clicker";
import SettingsCounter from "./settingsCounter/settingsCounter";
import SettingsClicker from "./settingsCounter/settingsClicker";

function App() {
    const max = localStorage.getItem('max')
    const min = localStorage.getItem('min')

    let [count, setCount] = useState<number>(Number(min))
    let [maxValue, setMaxValue] = useState<number>(Number(max) || 5)
    let [minValue, setMinValue] = useState<number>(Number(min) || 0)
    let [settings, setSettings] = useState<boolean>(true)
    const setMax = (value: number) => {
        setMaxValue(value)
    }
    const setMin = (value: number) => {
        setMinValue(value)
    }
    const setValue = () => {
        localStorage.setItem('max', maxValue.toString())
        setMaxValue(Number(localStorage.getItem('max')))

        localStorage.setItem('min', minValue.toString())
        setMinValue(Number(localStorage.getItem('min')))
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
