import {combineReducers, createStore} from "redux"
import {loadingReducer} from "./loadingReduser"
import {settingsReducer} from "./settingsReducer"

let reducers = combineReducers({
  loading: loadingReducer,
  settings: settingsReducer
})

const store = createStore(reducers)
window.store = store
export default store