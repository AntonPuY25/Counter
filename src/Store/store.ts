import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
   counter:counterReducer
})
export type TypeStoreRedux = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))