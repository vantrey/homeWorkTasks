import axios, {AxiosResponse} from "axios"

const instance = axios.create(
  {
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
  }
)

type ResponseDataType = {
  errorText: string
  info: string
  yourBody: { title: string, success: boolean }
  yourQuery: {}
}

export const api = {
  setServerStatus(success: boolean): () => Promise<AxiosResponse<ResponseDataType>> {
    return () => {
      return instance.post<ResponseDataType>('',
        {title: 'new title', success: success}
      )
    }
  },
}
export const tryCatch = async (request: () => Promise<AxiosResponse<ResponseDataType>>) => {
  try {
    const response = await request()
    console.log('answer:', response.data)
    return response.data.errorText
  } catch (error) {
    console.log('error:', {...error})
    return 'error'
  }
}
