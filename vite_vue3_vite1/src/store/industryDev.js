/*
 * @Description: 公共数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-01-13 14:49:19
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\common.js
 */
import { defineStore } from 'pinia'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useIndustryDevStore = defineStore('industryDev', {
  state: () => {
    return {
      // 产业图谱
      IndustryGraphMapList: [
        {
          name: '产业总数',
          value: '-',
          unit: '个'
        },
        {
          name: '二级产业总数',
          value: '-',
          unit: '个'
        }
      ],
      IndustryGraph: [
        {
          name: '一级产业名',
          itemStyle: {
            color: '#FF831E'
          },
          children: [
            {
              name: '二级产业名',
              value: 1,
              itemStyle: {
                color: '#FF831E'
              }
            },
            {
              name: '二级产业名',
              value: 1,
              itemStyle: {
                color: '#FF831E'
              }
            },
            {
              name: '二级产业名',
              value: 1,
              itemStyle: {
                color: '#FF831E'
              }
            }
          ]
        }
      ],
      IndustryGraphColor: [
        '#FF831E',
        '#45B0D4',
        '#504DC6',
        '#F7C84A',
        '#50D46C',
        '#328EFA',
        '#EFA11E',
        '#C951BE',
        '#5FB348',
        '#494DBE',
        '#80AEBE',
        '#E54544'
      ],
      // 产业经营发展
      selectManageDev: 0,
      ManageDevYear: [2022, 2021, 2020],
      ManageDev: [
        {
          xAxisData: [
            '其他',
            '建筑业',
            '数字文化创意',
            '数字金融',
            '现代商贸服贸',
            '信创',
            '航空航天',
            '生物医药',
            '能源互联网',
            '工业互联网',
            '先进材料',
            '智能网联汽车'
          ],
          seriesData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          xAxisData: [
            '其他',
            '建筑业',
            '数字文化创意',
            '数字金融',
            '现代商贸服贸',
            '信创',
            '航空航天',
            '生物医药',
            '能源互联网',
            '工业互联网',
            '先进材料',
            '智能网联汽车'
          ],
          seriesData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          xAxisData: [
            '其他',
            '建筑业',
            '数字文化创意',
            '数字金融',
            '现代商贸服贸',
            '信创',
            '航空航天',
            '生物医药',
            '能源互联网',
            '工业互联网',
            '先进材料',
            '智能网联汽车'
          ],
          seriesData1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          seriesData3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ],
      // 产业规模发展
      selectScaleDev: 0,
      ScaleDevYear: [2022, 2021, 2020],
      ScaleDev: [
        {
          total: '00000',
          智能网联汽车: '-',
          先进材料: '-',
          工业互联网: '-',
          能源互联网: '-',
          生物医药: '-',
          航空航天: '-',
          信创: '-',
          现代商贸服贸: '-',
          数字金融: '-',
          数字文化创意: '-',
          其他: '-',
          建筑业: '-'
        },
        {
          total: '00000',
          智能网联汽车: '-',
          先进材料: '-',
          工业互联网: '-',
          能源互联网: '-',
          生物医药: '-',
          航空航天: '-',
          信创: '-',
          现代商贸服贸: '-',
          数字金融: '-',
          数字文化创意: '-',
          其他: '-',
          建筑业: '-'
        },
        {
          total: '00000',
          智能网联汽车: '-',
          先进材料: '-',
          工业互联网: '-',
          能源互联网: '-',
          生物医药: '-',
          航空航天: '-',
          信创: '-',
          现代商贸服贸: '-',
          数字金融: '-',
          数字文化创意: '-',
          其他: '-',
          建筑业: '-'
        }
      ],
      // 产业税收增速发展 -> 列表
      TaxDevList: [
        {
          icon: '/static/child2Img/IndustryDev/ScaleDev/生物医药.png',
          title: '2022年增速第一',
          name: '生物医药',
          status: 1,
          per: '-'
        },
        {
          icon: '/static/child2Img/IndustryDev/ScaleDev/智能网联汽车.png',
          title: '2021年增速第一',
          name: '智能网联汽车',
          status: 1,
          per: '-'
        }
      ],
      // 产业税收增速发展 -> 产业税收年度增速
      selectGrowthRate: '智能网联汽车',
      TaxDevGrowthRateName: [
        '智能网联汽车',
        '先进材料',
        '工业互联网',
        '能源互联网',
        '生物医药',
        '航空航天',
        '信创',
        '现代商贸服贸',
        '数字金融',
        '数字文化创意',
        '其他',
        '建筑业'
      ],
      TaxDevGrowthRate: {
        xAxisData: ['2021', '2022', '2023'],
        智能网联汽车: [0, 0, 0],
        先进材料: [0, 0, 0],
        工业互联网: [0, 0, 0],
        能源互联网: [0, 0, 0],
        生物医药: [0, 0, 0],
        航空航天: [0, 0, 0],
        信创: [0, 0, 0],
        现代商贸服贸: [0, 0, 0],
        数字金融: [0, 0, 0],
        数字文化创意: [0, 0, 0],
        其他: [0, 0, 0],
        建筑业: [0, 0, 0]
      },
      // 产业税收月度对比
      selectTaxContrast: 0,
      TaxContrastYear: [2022, 2021, 2020],
      TaxContrastMap: {
        智能网联汽车: 'IntelligentConnectedCar',
        先进材料: 'AdvancedMaterial',
        工业互联网: 'IndustrialInternet',
        能源互联网: 'EnergyInternet',
        生物医药: 'BiologicalMedicine',
        航空航天: 'Aerospace',
        信创: 'Xinchuang',
        现代商贸服贸: 'ServiceTrade',
        数字金融: 'DigitalFinance',
        数字文化创意: 'DigitalCultural',
        建筑业: 'ConstructionIndustry',
        其他: 'Other'
      },
      TaxContrast: {
        // 产业税收月度对比 -> 智能网联汽车
        IntelligentConnectedCar: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 先进材料
        AdvancedMaterial: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 工业互联网
        IndustrialInternet: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 能源互联网
        EnergyInternet: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 生物医药
        BiologicalMedicine: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 航空航天
        Aerospace: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 信创
        Xinchuang: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 现代商贸服贸
        ServiceTrade: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 数字金融
        DigitalFinance: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 数字文化创意
        DigitalCultural: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 建筑业
        ConstructionIndustry: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // 产业税收月度对比 -> 其他
        Other: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
      }
    }
  },
  actions: {
    getBackInterface(bol) {
      if (bol) {
        this.getIndustryMap() // 产业图谱
        this.getIndustryOperationsClientCount(0) // 产业经营发展和规模发展
        this.getIndustryOperationsClientCount(1) // 产业经营发展和规模发展
        this.getIndustryOperationsClientCount(2) // 产业经营发展和规模发展
        this.getIndustryGrowthRate() // 产业税收增速发展
        this.getMonthTaxComparisonP() // 产业税收增速发展
      }
    },
    setSelectManageDev(val) {
      this.selectManageDev = val
    },
    setSelectScaleDev(val) {
      this.selectScaleDev = val
    },
    setSelectTaxContrast(val) {
      this.selectTaxContrast = val
    },
    setSelectGrowthRate(val) {
      this.selectGrowthRate = val
    },
    // 产业图谱
    getIndustryMap() {
      request({
        url: '/getIndustryMap',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getIndustryMap', data)
          if (!isEmpty(data)) {
            const { count, countChild, list } = data
            this.IndustryGraphMapList = [
              {
                name: '产业总数',
                value: count,
                unit: '个'
              },
              {
                name: '二级产业总数',
                value: countChild,
                unit: '个'
              }
            ]
            if (!isEmpty(list)) {
              let obj = {}
              list.forEach((item) => {
                const { name, childName } = item
                if (!obj[name]) {
                  obj[name] = []
                }
                obj[name].push(childName)
              })
              this.IndustryGraph = Object.entries(obj).map(([key, value], index) => {
                const color = this.IndustryGraphColor[index]
                const children = value.map((ite) => {
                  return {
                    name: ite,
                    value: 1,
                    itemStyle: {
                      color
                    }
                  }
                })
                return {
                  name: key,
                  itemStyle: {
                    color
                  },
                  children
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryMap', e)
          return false
        })
    },
    // 产业经营发展和规模发展
    getIndustryOperationsClientCount(idx) {
      request({
        url: '/getIndustryOperationsClientCount',
        isParams: true,
        method: 'get',
        data: { year: this.ManageDevYear[idx] }
      })
        .then(({ data }) => {
          // console.log('getIndustryOperationsClientCount', data)
          if (!isEmpty(data)) {
            const { list, total } = data
            if (!isEmpty(list)) {
              list.reverse()
              let xAxisData = []
              let seriesData1 = []
              let seriesData2 = []
              let seriesData3 = []
              let obj = { total: `00000${total}`.slice(-5) }
              list.forEach((item) => {
                const { name, income, taxAmount, policy, clientCount } = item
                xAxisData.push(name)
                seriesData1.push(income)
                seriesData2.push(taxAmount)
                seriesData3.push(policy)
                obj[name] = clientCount
              })
              this.ManageDev[idx] = {
                xAxisData,
                seriesData1,
                seriesData2,
                seriesData3
              }
              this.ScaleDev[idx] = obj
            }

            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryOperationsClientCount', e)
          return false
        })
    },
    // 产业税收增速发展
    getIndustryGrowthRate() {
      const req2020 = request({
        url: '/getIndustryGrowthRate',
        isParams: true,
        method: 'get',
        data: {
          year: 2020
        }
      })
      const req2021 = request({
        url: '/getIndustryGrowthRate',
        isParams: true,
        method: 'get',
        data: {
          year: 2021
        }
      })
      const req2022 = request({
        url: '/getIndustryGrowthRate',
        isParams: true,
        method: 'get',
        data: {
          year: 2022
        }
      })
      Promise.all([req2020, req2021, req2022])
        .then(([{ data: d2020 }, { data: d2021 }, { data: d2022 }]) => {
          // console.log('getIndustryGrowthRate', d2020, d2021, d2022)
          if (!isEmpty(d2020) && !isEmpty(d2021) && !isEmpty(d2022)) {
            let rate2022 = d2022.map((item) => item.rate)
            let rate2021 = d2021.map((item) => item.rate)
            let max2022 = Math.max(...rate2022)
            let max2021 = Math.max(...rate2021)
            let idx2022 = rate2022.findIndex((item) => item === max2022)
            let idx2021 = rate2021.findIndex((item) => item === max2021)
            let name2022 = d2022[idx2022].name
            let name2021 = d2021[idx2021].name
            let status2022 = max2022 >= 0 ? 1 : 0
            let status2021 = max2021 >= 0 ? 1 : 0
            this.TaxDevList = [
              {
                icon: `static/child2Img/IndustryDev/ScaleDev/${name2022}.png`,
                title: '2022年增速第一',
                name: name2022,
                status: status2022,
                per: max2022.toFixed(2)
              },
              {
                icon: `static/child2Img/IndustryDev/ScaleDev/${name2021}.png`,
                title: '2021年增速第一',
                name: name2021,
                status: status2021,
                per: max2021.toFixed(2)
              }
            ]
            let obj = {
              xAxisData: ['2020', '2021', '2022'],
              智能网联汽车: [0, 0, 0],
              先进材料: [0, 0, 0],
              工业互联网: [0, 0, 0],
              能源互联网: [0, 0, 0],
              生物医药: [0, 0, 0],
              航空航天: [0, 0, 0],
              信创: [0, 0, 0],
              现代商贸服贸: [0, 0, 0],
              数字金融: [0, 0, 0],
              数字文化创意: [0, 0, 0],
              其他: [0, 0, 0],
              建筑业: [0, 0, 0]
            }
            d2020.forEach((item) => {
              const { name, rate } = item
              obj[name][0] = Number(rate.toFixed(0))
            })
            d2021.forEach((item) => {
              const { name, rate } = item
              obj[name][1] = Number(rate.toFixed(0))
            })
            d2022.forEach((item) => {
              const { name, rate } = item
              obj[name][2] = Number(rate.toFixed(0))
            })
            this.TaxDevGrowthRate = obj
            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryGrowthRate', e)
          return false
        })
    },
    getMonthTaxComparisonP() {
      request({
        url: '/getIndustryOperationsClientCount',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getMonthTaxComparisonP', data)
          if (!isEmpty(data)) {
            const { list } = data
            list.forEach(async (item) => {
              // console.log(item)
              const { id, name } = item
              // this.getMonthTaxComparison(2022, item.id)
              this.getMonthTaxComparison(2022, id).then((res) => {
                this.TaxContrast[this.TaxContrastMap[name]][0] = res
              })
              this.getMonthTaxComparison(2021, id).then((res) => {
                this.TaxContrast[this.TaxContrastMap[name]][1] = res
              })
              this.getMonthTaxComparison(2020, id).then((res) => {
                this.TaxContrast[this.TaxContrastMap[name]][2] = res
              })
            })
            return true
          }
        })
        .catch((e) => {
          console.log('getMonthTaxComparisonP', e)
          return false
        })
    },
    getMonthTaxComparison(year, industryType) {
      return new Promise((resolve, reject) => {
        request({
          url: '/getMonthTaxComparison',
          isParams: true,
          method: 'get',
          data: {
            year,
            industryType
          }
        })
          .then(({ data }) => {
            // console.log('getMonthTaxComparison', data)
            if (!isEmpty(data)) {
              let { list } = data
              let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              if (!isEmpty(list)) {
                list.reverse()
                // console.log('list', list)
                list.forEach((item, index) => {
                  arr[index] = Number(item.taxAmount.toFixed(2))
                })
              } else {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
              // console.log('arr', arr)
              resolve(arr)
              // return arr
              // return true
            }
          })
          .catch((e) => {
            reject(e)
            console.log('getMonthTaxComparison', e)
            // return false
          })
      })
    },
    test() {
      request({
        url: '/test',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('test', data)
          if (!isEmpty(data)) {
            return true
          }
        })
        .catch((e) => {
          console.log('test', e)
          return false
        })
    }
  }
})
export default useIndustryDevStore
