import {combineReducers, createStore} from "redux"
import {loadingReducer} from "./loadingReduser"
import {wednesdayReducer} from "./wednesdayReducer"

let reducers = combineReducers({
  loading: loadingReducer,
  wednesday: wednesdayReducer
})

const store = createStore(reducers)
window.store = store
export default store