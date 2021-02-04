export type TypeStateReducer = {
    min: number
    max: number
    settings: boolean
    count: number
}

export const initialState: TypeStateReducer = {
    min: 0,
    max: 5,
    settings: true,
    count:0,

}

type Actions = actionSetMax
    | actionSetMin
    | actionSetSettings
    | actionCount
    | actionReset;

export const counterReducer = (state: TypeStateReducer=initialState, action: Actions): TypeStateReducer => {
    switch (action.type) {
        case "SET_MAX": {
            return {
                ...state,
                max: action.max
            }

        }
        case "SET_MIN": {
            return {
                ...state,
                min: action.min,
                count: action.min
            }
        }
        case "SET_SETTINGS": {
            return {
                ...state,
                settings: !state.settings
            }
        }
        case "SET_COUNT": {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case "RESET":{
            return {...state,
            count:state.min
            }
        }

        default:
            return state
    }

}
export default counterReducer;
type actionSetMax = ReturnType<typeof setMaxAC>
export const setMaxAC = (max: number) => {
    return {
        type: 'SET_MAX',
        max

    } as const
}
type actionSetMin = ReturnType<typeof setMinAC>
export const setMinAC = (min: number) => {
    return {
        type: 'SET_MIN',
        min

    } as const
}
type actionSetSettings = ReturnType<typeof setSettingsAC>
export const setSettingsAC = () => {
    return {
        type: "SET_SETTINGS"
    } as const
}
type actionCount = ReturnType<typeof setCountAC>
export const setCountAC = () => {
    return {
        type: "SET_COUNT"
    } as const
}
type actionReset = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: "RESET"
    } as const
}