import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import useCommonStore from '@/store/common'
let reqConfig
let loadingE

const service = axios.create()

// 请求拦截
service.interceptors.request.use(
  (request) => {
    // 所有的请求都是formdata
    request.headers['Content-Type'] = 'multipart/form-data'
    const commonStore = useCommonStore()
    if (commonStore.token) request.headers['token'] = commonStore.token
    /* download file*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    /* upload file*/
    if (request.isUploadFile) {
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    reqConfig = request
    if (request.bfLoading) {
      loadingE = ElLoading.service({
        lock: true,
        text: '数据载入中',
        // spinner: 'el-icon-ElLoading',
        background: 'rgba(0, 0, 0, 0.1)'
      })
    }
    /*
     *params会拼接到url上
     * */
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    } else {
      let fd = new FormData()
      for (const key in request.data) {
        fd.append(key, request.data[key])
      }
      request.data = fd
    }
    return request
  },
  (err) => {
    Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (res) => {
    if (reqConfig.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (reqConfig.isDownLoadFile) {
      return res
    }
    const { message, code, data } = res.data
    //更新token保持登录状态

    const successCode = '0,200,20000,401,500'
    if (successCode.includes(code)) {
      if (code === 500) {
        ElMessage({
          message: message,
          type: 'error',
          duration: 2 * 1000
        })
        return
      } else if (code === 401) {
        ElMessage({
          message: data,
          type: 'error',
          duration: 2 * 1000
        })
        return
      }
      return res.data
    } else {
      if (reqConfig.isAlertErrorMsg) {
        ElMessage({
          message: message,
          type: 'error',
          duration: 2 * 1000
        })
      }
      //返回错误信息
      //如果未catch 走unhandledrejection进行收集
      //注：如果没有return 则，会放回到请求方法中.then ,返回的res为 undefined
      return Promise.reject(res.data)
    }
  },
  (err) => {
    /*http错误处理，处理跨域，404，401，500*/
    if (loadingE) loadingE.close()
    ElMessage({
      message: err,
      type: 'error',
      duration: 2 * 1000
    })
    //如果是跨域
    //Network Error,cross origin
    const errObj = {
      msg: err.toString(),
      reqUrl: reqConfig.baseURL + reqConfig.url,
      params: reqConfig.isParams ? reqConfig.params : reqConfig.data
    }
    return Promise.reject(JSON.stringify(errObj))
  }
)

export function axiosReq({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg = true
}) {
  return service({
    url: url,
    method: method ?? 'get',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? false,
    afHLoading: afHLoading ?? true,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    isAlertErrorMsg: isAlertErrorMsg,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  })
}

export default axiosReq
