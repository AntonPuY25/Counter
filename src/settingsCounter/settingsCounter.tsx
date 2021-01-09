import React, {ChangeEvent} from "react";
import '../App.css';

export type TypePropsSettingsCounter = {
    maxValue: number
    setMax: (value: number) => void
    minValue: number
    setMin: (value: number) => void
    settings: boolean

}
const SettingsCounter: React.FC<TypePropsSettingsCounter> = ({
                                                                 maxValue, setMax,
                                                                 minValue, setMin,
                                                                 settings

                                                             }) => {
    const changeMax = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value;
        setMax(Number(value))
    }

    const changeMin = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value;
        setMin(Number(value))
    }
    const displayNone = {
        display: 'none'
    }
    const displayBlock = {
        display: 'block'
    }
    return <div className='counter1' style={settings ? displayNone : displayBlock}>

        <div className={`${maxValue < 0 || maxValue <= minValue ? "maxValue error" : "maxValue"}`}>
            <span>Max Value</span>
            <span>
                <input value={maxValue}
                       onChange={(event) => {
                           changeMax(event)
                       }}
                       type='number'/></span>
        </div>
        <div className={`${minValue < 0 || minValue >= maxValue ? "minValue error" : "minValue"}`}>
            <span>Min Value</span>
            <span><input

                value={minValue}
                onChange={(event) => {
                    changeMin(event)
                }}
                type='number'/></span>
        </div>
    </div>
}
export default SettingsCounter;