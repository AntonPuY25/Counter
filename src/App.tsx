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
    setSettingsAC, TypeStateReducer,
} from "./Store/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {TypeStoreRedux} from "./Store/store";

function App() {

const state = useSelector<TypeStoreRedux,TypeStateReducer>(state => state.counter)
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
