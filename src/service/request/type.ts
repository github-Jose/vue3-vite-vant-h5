import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface myRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorInterceptors?: (error: any) => any
  responseInterceptors?: (response: T) => T
  responseErrorInterceptors?: (error: any) => any
}

export interface myAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: myRequestInterceptors<T>
  isShowLoading?: boolean
}
