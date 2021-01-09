import React from "react";
import '../App.css';

export type TypePropsSettingsClicker = {
    maxValue: number
    minValue: number
    setValue: () => void
    settings: boolean

}
const SettingsClicker: React.FC<TypePropsSettingsClicker> = ({
                                                                 minValue,
                                                                 maxValue,
                                                                 setValue, settings


                                                             }) => {
    let setValueButton = () => {
        setValue();
    }
    const displayNone = {
        display: 'none'
    }
    const displayBlock = {
        display: 'block'
    }
    return <div className='clicker1' style={settings ? displayNone : displayBlock}>

        <div>
            <button disabled={maxValue < 0 || maxValue <= minValue || minValue < 0
            || minValue >= maxValue}
                    onClick={setValueButton}
                    className='btnSet'>Set
            </button>
        </div>
    </div>
}
export default SettingsClicker