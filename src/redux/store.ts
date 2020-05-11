import {applyMiddleware, combineReducers, createStore} from "redux"
import {loadingReducer} from "./loadingReduser"
import {wednesdayReducer} from "./wednesdayReducer"
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  loading: loadingReducer,
  wednesday: wednesdayReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
export default store