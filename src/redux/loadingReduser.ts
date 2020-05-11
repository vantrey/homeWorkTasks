import {SET_LOADING, SetLoadingActionType, SetLoadingActionTypes} from "../types/actionsTypes";

type InitialStateType = {
  isLoading: boolean
}
const initialState: InitialStateType = {
  isLoading: false
}
export const loadingReducer = (state = initialState, action: SetLoadingActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.isLoading}

    default:
      return state
  }
}

export const setLoading = (isLoading: boolean): SetLoadingActionType => ({
  type: SET_LOADING,
  isLoading
})