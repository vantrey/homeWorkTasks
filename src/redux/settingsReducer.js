import kids from '../Pages/Wednesday/Kids.module.css'
import light from '../Pages/Wednesday/Light.module.css'
import dark from '../Pages/Wednesday/Dark.module.css'

const SET_STYLE = 'settingsReducer/SET_STYLE'

const initialState = {
  style: light,
  stylesSwitchers: [
    {title: 'Light', value: 'light', checked: true},
    {title: 'Dark', value: 'dark', checked: false},
    {title: 'Kids', value: 'kids', checked: false},
  ],
}
export const settingsReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export const setStyleAC = (value) => ({
  type: SET_STYLE,
  value
})