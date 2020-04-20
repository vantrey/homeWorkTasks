import defaultStyle from '../Pages/Wednesday/Default.module.css'
import dark from '../Pages/Wednesday/Dark.module.css'
import kids from '../Pages/Wednesday/Kids.module.css'

const SET_STYLE = 'wednesdayReducer/SET_STYLE'
const SET_CHECKBOX = 'wednesdayReducer/SET_CHECKBOX'

const initialState = {
  style: defaultStyle,
  stylesSwitchers: [
    {title: 'Light', value: 'light', checked: true},
    {title: 'Dark', value: 'dark', checked: false},
    {title: 'Kids', value: 'kids', checked: false},
  ],
  isChecked: false,
}
export const wednesdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE:
      return {
        ...state,
        style: action.value === 'kids' ? kids : action.value === 'dark' ? dark : defaultStyle,
        stylesSwitchers: state.stylesSwitchers.map(s => {
          if (s.value === action.value) {
            return {...s, checked: true}
          } else return {...s, checked: false}
        }),
      }
    case SET_CHECKBOX:
      return {...state, isChecked: action.isChecked}
    default:
      return state
  }
}

export const setStyle = (value) => ({type: SET_STYLE, value})
export const setCheckbox = (isChecked) => ({type: SET_CHECKBOX, isChecked})