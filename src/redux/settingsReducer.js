const SET_STYLE = 'settingsReducer/SET_STYLE'

const initialState = {
  styles: [
    {value: 'light', checked: true},
    {value: 'dark', checked: false},
    {value: 'green', checked: false},
  ]
}
export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE:
      return {
        ...state,
        styles: state.styles.map(s => {
          if (s.value === action.value) {
            return {...s, checked: true}
          } else return {...s, checked: false}
        })
      }
    default:
      return state
  }
}

export const setStyleAC = (value) => ({
  type: SET_STYLE,
  value
})