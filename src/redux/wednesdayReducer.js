import light from '../Pages/Wednesday/Light.module.css'
import dark from '../Pages/Wednesday/Dark.module.css'
import kids from '../Pages/Wednesday/Kids.module.css'

const SET_STYLE = 'wednesdayReducer/SET_STYLE'
const SET_CHECKBOX = 'wednesdayReducer/SET_CHECKBOX'
const GET_SERVER_STATUS = 'wednesdayReducer/GET_SERVER_STATUS'

const initialState = {
  style: kids,
  stylesSwitchers: [
    {title: 'Kids', value: 'kids', checked: true},
    {title: 'Dark', value: 'dark', checked: false},
    {title: 'Light', value: 'light', checked: false},
  ],
  isChecked: false,
  serverStatus: ''
}
export const wednesdayReducer = (state = initialState, action) => {
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
    case GET_SERVER_STATUS:
      return {...state, serverStatus: action.serverStatus}
    default:
      return state
  }
}

export const setStyle = (value) => ({type: SET_STYLE, value})
export const setCheckbox = (isChecked) => ({type: SET_CHECKBOX, isChecked})
export const getServerStatus = (serverStatus) => ({type: GET_SERVER_STATUS, serverStatus})