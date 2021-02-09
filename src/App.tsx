import React, {useEffect} from 'react';
import './App.css';
import Counter from "./counter";
import Clicker from "./clicker";
import SettingsCounter from "./settingsCounter/settingsCounter";
import SettingsClicker from "./settingsCounter/settingsClicker";
import {
    getLocalStorageTC,
    resetAC,
    setCountAC, setLocalStorageTC,
    setMaxAC,
    setMinAC,
    setSettingsAC,
} from "./Store/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AllSelectors} from "./Store/Selectors/selectors";

function App() {

    const {count,max,min,settings} = useSelector(AllSelectors)
const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getLocalStorageTC())
    },[])

    const setMax = (value: number) => {
        dispatch(setMaxAC(value))
    }
    const setMin = (value: number) => {
        dispatch(setMinAC(value))
    }
    const setValue = () => {
        dispatch(setLocalStorageTC())

    }
    const inc = () => {
        dispatch(setCountAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }
    const set = () => {
        dispatch(setSettingsAC())
    }
    return (<div className='Main'>
        <Counter counter={count} maxValue={max} settings={settings}/>
        <Clicker increase={inc} reset={reset} count={count}
                 maxValue={max} minValue={min} set={set} settings={settings}/>
        <SettingsCounter maxValue={max} setMax={setMax}
                         setMin={setMin} minValue={min} settings={settings}/>
        <SettingsClicker maxValue={max} minValue={min}
                         setValue={setValue}
                         settings={settings}/>
        </div>


    );
}

export default App;
