import { createStore } from 'redux';
import {combineReducers} from 'redux'
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
   counter:counterReducer
})
export type TypeStoreRedux = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)