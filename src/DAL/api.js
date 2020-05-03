import axios from "axios"

const instance = axios.create(
  {
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
  }
)

export const api = {
  setServerStatus(success) {
    return () => {
      return instance.post('',
        {title: 'new title', success: success}
      )
    }
  },
}
export const tryCatch = async (request) => {
  try {
    const response = await request()
    console.log('answer:', response.data)
    return response.data.errorText
  } catch (e) {
    console.log('error:', {...e})
    return 'error'
  }
}
