import {applyMiddleware, combineReducers, createStore} from "redux"
import {loadingReducer} from "./loadingReduser"
import {wednesdayReducer} from "./wednesdayReducer"
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  loading: loadingReducer,
  wednesday: wednesdayReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store