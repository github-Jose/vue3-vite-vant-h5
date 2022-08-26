import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { myRequestInterceptors, myAxiosRequestConfig } from './type'

import { Toast } from 'vant'
import 'vant/es/toast/style'

const DEFAULE_LOADING = false // 默认不展示全局loading

class myRequest {
  instance: AxiosInstance
  interceptors?: myRequestInterceptors
  myLoading?: { close: () => void }
  isShowLoading: boolean
  constructor(config: myAxiosRequestConfig) {
    this.instance = axios.create(config)
    // 创建实例时传入
    this.interceptors = config.interceptors

    this.isShowLoading = config.isShowLoading ?? DEFAULE_LOADING

    // 全部实例拦截
    this.instance.interceptors.request.use((config) => {
      if (this.isShowLoading) {
        Toast.loading({
          message: '加载中...',
          forbidClick: true
        })
      }
      return config
    })

    this.instance.interceptors.response.use((res) => {
      Toast.clear()
      return res.data
    })
  }

  request<T>(config: myAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 获取传入的loading
      if (config.isShowLoading) {
        this.isShowLoading = config.isShowLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.isShowLoading = DEFAULE_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.isShowLoading = DEFAULE_LOADING
          reject(err)
          return err
        })
    })
  }
}

export default myRequest
