import myRequest from './request'

export const myHttp = new myRequest({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 1000
})
