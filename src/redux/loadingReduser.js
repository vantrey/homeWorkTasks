const SET_LOADING = 'loadingReducer/SET_LOADING'

const initialState = {
  isLoading: false
}
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.isLoading}

    default:
      return state
  }
}

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
})