const SET_STYLE = 'settingsReducer/SET_STYLE'

const initialState = {
  style: ''
}
export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export const setStyleAC = (style) => ({
  type: SET_STYLE,
  style
})