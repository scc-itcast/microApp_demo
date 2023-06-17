/*
 * @Description: 公共数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-02-16 09:22:36
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\common.js
 */
import { defineStore } from 'pinia'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useCommonStore = defineStore('common', {
  state: () => {
    return {
      adaptorNotebook: false,
      notebookScale: 1.4,
      leftStyle: '',
      rightStyle: '',
      activeMenuIndex: 0,
      otherList: ['机房', 'F8', 'F7', 'F6', 'F5', 'F4', 'F3', 'F2', 'F1', 'B1', 'B2'],
      homeList: ['机房', 'F8', 'F7', 'F6', 'F5', 'F4', 'F3', 'F2', 'F1', 'B1', 'B2', '全部'],
      progress: 0, // 加载进度
      menuValue: 0, // 当前菜单
      commonInfoMap: {
        name: '高铁新城楼宇经济数字化平台' // 名字
      },
      token: '',
      // 载体
      carrierList: [
        { value: '紫光大厦', id: 5 }
        // { value: '相融大厦', id: 3 }
      ],
      // 公司
      enterpriseList: [
        // { value: '江苏集萃苏科思科技有限公司', id: 991 },
        // { value: '江苏集萃托普索清洁能源研发有限公司', id: 992 }
      ],
      // 载体id
      assetId: null,
      assetName: null,
      esriIndex: 0,
      eyes: true // 是否关闭两侧图表
    }
  },
  actions: {
    setProgress(val) {
      this.progress = val
    },
    setMenuValue(val) {
      this.menuValue = val
    },
    setEyes(val) {
      this.eyes = val
    },
    getBackInterface(bol) {
      if (bol) {
        console.log('')
        // this.getPorjectList()
        // this.getClientByName()
      }
    },
    getToken() {
      return new Promise((resolve, reject) => {
        request({
          url: '/getToken',
          isParams: true,
          method: 'get',
          data: { clientId: 'zjgwh', clientSecret: '56D70EC45DE04019' }
        })
          .then(({ data }) => {
            // console.log('data', data)
            if (!isEmpty(data)) {
              // console.log(data)
              resolve(data)
              this.token = data
            }
          })
          .catch((e) => {
            console.log('getToken', e)
            reject(false)
          })
      })
    },
    // 载体
    getPorjectList() {
      request({
        url: '/getPorjectList',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getPorjectList', data)
          if (!isEmpty(data)) {
            // console.log(data)
            this.carrierList = data.map((item) => {
              return {
                ...item,
                value: item.projectName,
                label: item.projectName
              }
            })
          }
        })
        .catch((e) => {
          console.log('getPorjectList', e)
        })
    },
    // 公司
    getClientByName() {
      request({
        url: '/getClientByName',
        isParams: true,
        method: 'get',
        data: {
          id: this.assetId
        }
      })
        .then(({ data }) => {
          // console.log('getClientByName', data)
          if (!isEmpty(data)) {
            // console.log(data)
            this.enterpriseList = data.map((item) => {
              return {
                ...item,
                value: item.name,
                label: item.name
              }
            })
          }
        })
        .catch((e) => {
          console.log('getClientByName', e)
        })
    },
    // 公司所在楼层
    getClientByAssetIdClientId(client) {
      return new Promise((resolve, reject) => {
        request({
          url: '/getClientByAssetIdClientId',
          isParams: true,
          method: 'get',
          data: {
            asset: this.assetId,
            client
          }
        })
          .then(({ data }) => {
            // console.log('getClientByAssetIdClientId', data)
            if (!isEmpty(data)) {
              resolve(data)
              // console.log(data)
            }
          })
          .catch((e) => {
            reject(e)
            console.log('getClientByAssetIdClientId', e)
          })
      })
    }
  }
})
export default useCommonStore
