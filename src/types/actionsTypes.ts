export const SET_STYLE = 'wednesdayReducer/SET_STYLE'
export const SET_CHECKBOX = 'wednesdayReducer/SET_CHECKBOX'
export const SET_SERVER_STATUS = 'wednesdayReducer/SET_SERVER_STATUS'
export const SET_LOADING = 'loadingReducer/SET_LOADING'

export type SetServerStatusActionType = {
  type: typeof SET_SERVER_STATUS
  serverStatus: string
}
export type SetStyleActionType = {
  type: typeof SET_STYLE
  value: string
}
export type SetCheckboxActionType = {
  type: typeof SET_CHECKBOX
  isChecked: boolean
}

export type WednesdayActionTypes = SetServerStatusActionType | SetStyleActionType | SetCheckboxActionType

export type SetLoadingActionType = {
  type: typeof SET_LOADING,
  isLoading:boolean
}

export type SetLoadingActionTypes = SetLoadingActionType

export type AppActionsTypes = WednesdayActionTypes | SetLoadingActionTypes  //??
