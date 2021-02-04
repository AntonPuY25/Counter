import React from 'react';
import './App.css';
import Counter from "./counter";
import Clicker from "./clicker";
import SettingsCounter from "./settingsCounter/settingsCounter";
import SettingsClicker from "./settingsCounter/settingsClicker";
import {
    resetAC,
    setCountAC,
    setMaxAC,
    setMinAC,
    setSettingsAC, TypeStateReducer,
} from "./Store/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {TypeStoreRedux} from "./Store/store";

function App() {

const state = useSelector<TypeStoreRedux,TypeStateReducer>(state => state.counter)
const dispatch = useDispatch()

    const setMax = (value: number) => {
        dispatch(setMaxAC(value))
    }
    const setMin = (value: number) => {
        dispatch(setMinAC(value))
    }
    const setValue = () => {
        localStorage.setItem('max', state.max.toString())
        dispatch(setMaxAC(Number(localStorage.getItem('max'))))

        localStorage.setItem('min', state.min.toString())
        dispatch(setMinAC(Number(localStorage.getItem('min'))))
        dispatch(setSettingsAC())

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
        <Counter counter={state.count} maxValue={state.max} settings={state.settings}/>
        <Clicker increase={inc} reset={reset} count={state.count}
                 maxValue={state.max} minValue={state.min} set={set} settings={state.settings}/>
        <SettingsCounter maxValue={state.max} setMax={setMax}
                         setMin={setMin} minValue={state.min} settings={state.settings}/>
        <SettingsClicker maxValue={state.max} minValue={state.min}
                         setValue={setValue}
                         settings={state.settings}/>
        </div>


    );
}

export default App;
