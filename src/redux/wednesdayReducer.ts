import light from '../Pages/Wednesday/Light.module.css'
import dark from '../Pages/Wednesday/Dark.module.css'
import kids from '../Pages/Wednesday/Kids.module.css'
import {api, tryCatch} from "../DAL/api"
import {setLoading} from "./loadingReduser"
import {StyleSwitcherType} from "../types/entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";
import {
  AppActionsTypes,
  SET_CHECKBOX,
  SET_SERVER_STATUS,
  SET_STYLE, SetCheckboxActionType,
  SetServerStatusActionType, SetStyleActionType,
  WednesdayActionTypes
} from "../types/actionsTypes";

type InitialStateType = {
  style: { readonly [key: string]: string }
  stylesSwitchers: Array<StyleSwitcherType>
  isChecked: boolean,
  serverStatus: string
}

const initialState: InitialStateType = {
  style: kids,
  stylesSwitchers: [
    {title: 'Kids', value: 'kids', checked: true},
    {title: 'Dark', value: 'dark', checked: false},
    {title: 'Light', value: 'light', checked: false},
  ],
  isChecked: false,
  serverStatus: ''
}
export const wednesdayReducer = (state = initialState, action: WednesdayActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_STYLE:
      return {
        ...state,
        style: action.value === 'kids' ? kids : action.value === 'dark' ? dark : light,
        stylesSwitchers: state.stylesSwitchers.map(s => {
          if (s.value === action.value) {
            return {...s, checked: true}
          } else return {...s, checked: false}
        }),
      }
    case SET_CHECKBOX:
      return {...state, isChecked: action.isChecked}

    case SET_SERVER_STATUS:
      return {...state, serverStatus: action.serverStatus}
    default:
      return state
  }
}

const setServerStatus = (serverStatus: string): SetServerStatusActionType => ({type: SET_SERVER_STATUS, serverStatus})

export const setStyle = (value: string): SetStyleActionType => ({type: SET_STYLE, value})

export const setCheckbox = (isChecked: boolean): SetCheckboxActionType => ({type: SET_CHECKBOX, isChecked})

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsTypes>
type DispatchType = ThunkDispatch<AppStateType, unknown, AppActionsTypes>
export const getServerStatus = (success: boolean): ThunkType => {
  return (dispatch: DispatchType) => {
    dispatch(setLoading(true))
    tryCatch(api.setServerStatus(success)).then(data => {
      dispatch(setServerStatus(data))
      dispatch(setLoading(false))
    })
  }
}