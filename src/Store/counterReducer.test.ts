import counterReducer, {
    resetAC,
    setCountAC,
    setMaxAC,
    setMinAC,
    setSettingsAC,
    TypeStateReducer
} from "./counterReducer";

let state:TypeStateReducer;

beforeEach(()=>{
    state={
        min:0,
        max:5,
        settings:true,
        count:1,
    }
})
test('Check correct work Set_MAX',()=>{

let newState = counterReducer(state,setMaxAC(10))

    expect(newState.max).toBe(10)

})

test('Check correct work Set_MIN',()=>{

    let newState = counterReducer(state,setMinAC(5))

    expect(newState.min).toBe(5)

})
test('Check correct work Set_SETTINGS',()=>{

    let newState = counterReducer(state,setSettingsAC())
    expect(newState.settings).toBe(!state.settings)
})
test('Check correct work Set_COUNT',()=>{

    let newState = counterReducer(state,setCountAC())
    expect(newState.count).toBe(state.count+1)
})

test('Check correct work RESET',()=>{

    let newState = counterReducer(state,resetAC())
    expect(newState.count).toBe(state.min)
})
