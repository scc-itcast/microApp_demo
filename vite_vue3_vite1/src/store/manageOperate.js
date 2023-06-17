/*
 * @Description: 公共数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-02-02 18:12:18
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\manageOperate.js
 */
import { defineStore } from 'pinia'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useManageOperateStore = defineStore('manageOperate', {
  state: () => {
    return {
      // 楼宇产值 -> 总体数据
      BuildOutputAggregateMap: {
        icon: '/static/child2Img/ManageOperate/common/总产值.png',
        name: '总产值',
        num: '-',
        unit: '亿',
        status: 1,
        per: '-'
      },
      BuildOutputAggregateList: [
        {
          icon: '/static/child2Img/ManageOperate/common/单位面积平均产值.png',
          name: '单位面积平均产值',
          num: '-',
          unit: '万元/㎡'
        },
        {
          icon: '/static/child2Img/ManageOperate/common/亿元税收楼宇.png',
          name: '亿元税收楼宇',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/ManageOperate/common/千万元税收楼宇.png',
          name: '千万元税收楼宇',
          num: '-',
          unit: '座'
        }
      ],
      // 楼宇产值 -> 季度产值
      BuildOutputQuarterlyOutput: {
        xAxisData: ['一季度', '二季度', '三季度', '四季度'],
        seriesData1: [0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0]
      },
      // 楼宇产值 -> 年度产值
      BuildOutputAnnualOutput: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData: [0, 0, 0]
      },
      // 楼宇产值 -> 租赁合同状态
      BuildOutputLeaseStatus: [
        {
          name: '智能网联汽车',
          value: '356711.5'
        },
        {
          name: '执先进材料',
          value: '356711.5'
        },
        {
          name: '其他',
          value: '556711.5'
        }
      ],
      // 楼宇产值 -> 楼宇产值分布
      BuildOutputDistribute: [
        {
          name: '0-1000万元',
          value: '20'
        },
        {
          name: '1000-5000万元',
          value: '1'
        },
        {
          name: '5000万元-1亿',
          value: '1'
        },
        {
          name: '1亿以上',
          value: '1'
        }
      ],
      // 楼宇产值 -> 单位面积产值排名
      BuildOutputRank: [
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        }
      ],
      // 楼宇产值 -> 总产值排名
      BuildOutputRankTotalRank: [
        {
          name: '载体名称载体名称载体名称',
          value: '8.76',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '6.50',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '4.98',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '4.15',
          status: 0,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '2.76',
          status: 1,
          per: '-'
        }
      ],
      // 楼税收值 -> 总体数据
      BuildTaxAggregateMap: {
        icon: '/static/child2Img/ManageOperate/common/总产值.png',
        name: '总产值',
        num: '-',
        unit: '亿',
        status: 1,
        per: '-'
      },
      BuildTaxAggregateList: [
        {
          icon: '/static/child2Img/ManageOperate/common/单位面积平均产值.png',
          name: '单位面积平均产值',
          num: '-',
          unit: '万元/㎡'
        },
        {
          icon: '/static/child2Img/ManageOperate/common/亿元税收楼宇.png',
          name: '亿元税收楼宇',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/ManageOperate/common/千万元税收楼宇.png',
          name: '千万元税收楼宇',
          num: '-',
          unit: '座'
        }
      ],
      // 楼税收值 -> 季度税收
      BuildTaxQuarterlyOutput: {
        xAxisData: ['一季度', '二季度', '三季度', '四季度'],
        seriesData1: [0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0]
      },
      // 楼税收值 -> 年度税收
      BuildTaxAnnualOutput: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData: [0, 0, 0]
      },
      // 楼税收值 -> 当前季度核心产业税收分布
      BuildTaxLeaseStatus: [
        {
          name: '智能网联汽车',
          value: '356711.5'
        },
        {
          name: '执先进材料',
          value: '356711.5'
        },
        {
          name: '其他',
          value: '556711.5'
        }
      ],
      // 楼税收值 -> 楼宇税收分布
      BuildTaxDistribute: [
        {
          name: '0-1000万元',
          value: '20'
        },
        {
          name: '1000-5000万元',
          value: '1'
        },
        {
          name: '5000万元-1亿',
          value: '1'
        },
        {
          name: '1亿以上',
          value: '1'
        }
      ],
      // 楼税收值 -> 单位面积排名
      BuildTaxRank: [
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          num: '-'
        }
      ],
      // 楼税收值 -> 总税收排名
      BuildTaxTotalRank: [
        {
          name: '载体名称载体名称载体名称',
          value: '8.76',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '6.50',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '4.98',
          status: 1,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '4.15',
          status: 0,
          per: '-'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '2.76',
          status: 1,
          per: '-'
        }
      ],
      // 优质楼宇 -> 总体数据
      QualityBuildAggregate: [
        {
          icon: '/static/child2Img/Overview/QualityBuild/苏州市金牌楼宇.png',
          name: '苏州市金牌楼宇',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/Overview/QualityBuild/苏州市特色楼宇.png',
          name: '苏州市特色楼宇',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/Overview/QualityBuild/亿元税收楼宇.png',
          name: '亿元税收楼宇',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/Overview/QualityBuild/千万元税收楼宇.png',
          name: '千万元税收楼宇',
          num: '-',
          unit: '座'
        }
      ],
      QualityBuildAggregate2: [
        {
          value: '2',
          name: '五星',
          itemStyle: {
            color: 'rgba(255,193,0,.6)'
          }
        },
        {
          value: '3',
          name: '四星',
          itemStyle: {
            color: 'rgba(97,221,170,.6)'
          }
        },
        {
          value: '4',
          name: '三星',
          itemStyle: {
            color: 'rgba(30,127,255,.6)'
          }
        }
      ],
      // 优质楼宇 -> 优质楼宇列表
      QualityBuildList: [
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '苏州市金牌楼宇、千万元税收楼宇、2022年五星级楼宇'
        },
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '苏州市特色楼宇'
        },
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '2022年四星级楼宇'
        },
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '2022年四星级楼宇'
        },
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '2022年四星级楼宇'
        },
        {
          carrier: '载体名称载体名称载体名称载体名称',
          reason: '2022年四星级楼宇'
        }
      ],
      // 物业管理 -> 物业收费
      PropertyManagePropertyCharges: [
        {
          icon: '/static/child2Img/ManageOperate/PropertyManage/物业费均价.png',
          name: '物业费均价',
          num: '-',
          unit: '元/㎡/月'
        },
        {
          icon: '/static/child2Img/ManageOperate/PropertyManage/水费均价.png',
          name: '水费均价',
          num: '-',
          unit: '元/吨'
        },
        {
          icon: '/static/child2Img/ManageOperate/PropertyManage/电费均价.png',
          name: '电费均价',
          num: '-',
          unit: '元/度'
        }
      ],
      // 物业管理 -> 物业费排名
      PropertyManagePropertyCostRank: [
        {
          name: '企业名称企业名称企业名称',
          value: '5000',
          status: 1,
          per: '-'
        },
        {
          name: '企业名称企业名称企业名称',
          value: '3000',
          status: 1,
          per: '-'
        },
        {
          name: '企业名称企业名称企业名称',
          value: '2025',
          status: 1,
          per: '-'
        },
        {
          name: '企业名称企业名称企业名称',
          value: '2025',
          status: 1,
          per: '-'
        }
      ],
      // 物业管理 -> 车位数量
      PropertyManageParkSpaceMap: {
        icon: '/static/child2Img/ManageOperate/PropertyManage/车位数量.png',
        name: '车位总数',
        value: '1500'
      },
      PropertyManageParkSpaceList: [
        {
          name: '地上',
          value: '400'
        },
        {
          name: '地下',
          value: '550'
        }
      ],
      // 物业管理 -> 载体车位数
      PropertyManageParkSpaceRank: [
        {
          carrier: '这里是载体名称这里是载体名称',
          total: '-',
          up: '-',
          down: '-'
        },
        {
          carrier: '这里是载体名称这里是载体名称',
          total: '-',
          up: '-',
          down: '-'
        },
        {
          carrier: '这里是载体名称这里是载体名称',
          total: '-',
          up: '-',
          down: '-'
        },
        {
          carrier: '这里是载体名称这里是载体名称',
          total: '-',
          up: '-',
          down: '-'
        }
      ],
      // 能耗分析 -> 本月能耗
      EnergyAnalysisMonthEnergyWater: [
        {
          name: '本月累计用水',
          num: '-',
          unit: '吨'
        },
        {
          name: '单位面积平均用水',
          num: '-',
          unit: '吨/㎡/月'
        },
        {
          name: '本年累计用水',
          num: '-',
          unit: '吨'
        }
      ],
      EnergyAnalysisMonthEnergyElectric: [
        {
          name: '本月累计用电',
          num: '-',
          unit: '度'
        },
        {
          name: '单位面积平均用电',
          num: '-',
          unit: '度/㎡/月'
        },
        {
          name: '本年累计用电',
          num: '-',
          unit: '度'
        }
      ],
      // 能耗分析 -> 用能趋势
      EnergyAnalysisTrend: {
        xAxisData: ['22/02', '22/04', '22/06', '22/08', '22/10'],
        // seriesData1: [21, 32, 16, 9, 25],
        // seriesData2: [117, 120, 18, 118, 116]
        seriesData1: [0, 0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0, 0]
      },
      // 能耗分析 -> 单位面积用水排名
      EnergyAnalysisWaterRank: [
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        }
      ],
      // 能耗分析 -> 单位面积用电排名
      EnergyAnalysisElectricRank: [
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1.23',
          per: '-'
        }
      ]
    }
  },
  actions: {
    getBackInterface(bol) {
      if (bol) {
        this.getBuildingIncomeInfo() // 楼宇产值
        this.getBuildingTaxInfo() // 楼税收值
        this.getPropertyManagement() // 物业管理
        this.getEnergyAnalysis() // 能耗分析
      }
    },
    // 楼宇产值
    getBuildingIncomeInfo() {
      request({
        url: '/getBuildingIncomeInfo',
        isParams: true,
        method: 'get',
        data: {
          yearNew: 2022,
          yearOld: 2021
        }
      })
        .then(({ data }) => {
          // console.log('getBuildingIncomeInfo', data)
          if (!isEmpty(data)) {
            const {
              totalIncome,
              rate,
              avg,
              moreThanTenMillion,
              moreThanBillions,
              chartSeason,
              chartHistogram,
              chartSeasonIndustryType,
              chartAssetCount,
              unitAreaTaxRank,
              rank
            } = data
            // 楼宇产值 -> 总体数据
            this.BuildOutputAggregateMap = {
              icon: '/static/child2Img/ManageOperate/common/总产值.png',
              name: '总产值',
              num: Number((totalIncome / 10000).toFixed(2)),
              unit: '亿',
              status: 1,
              per: rate
            }
            this.BuildOutputAggregateList = [
              {
                icon: '/static/child2Img/ManageOperate/common/单位面积平均产值.png',
                name: '单位面积平均产值',
                num: Number(avg.toFixed(2)),
                unit: '万元/㎡'
              },
              {
                icon: '/static/child2Img/ManageOperate/common/亿元税收楼宇.png',
                name: '亿元税收楼宇',
                num: Number(moreThanTenMillion.toFixed(2)),
                unit: '座'
              },
              {
                icon: '/static/child2Img/ManageOperate/common/千万元税收楼宇.png',
                name: '千万元税收楼宇',
                num: Number(moreThanBillions.toFixed(2)),
                unit: '座'
              }
            ]
            // 楼宇产值 -> 季度产值
            if (!isEmpty(chartSeason)) {
              let obj = {
                2021: [],
                2022: []
              }
              chartSeason.forEach((item) => {
                let { income, year } = item
                income = Number(income.toFixed(2))
                obj[year].push(income)
              })
              let seriesData1 = obj[2021]
              let seriesData2 = obj[2022]
              this.BuildOutputQuarterlyOutput = {
                xAxisData: ['一季度', '二季度', '三季度', '四季度'],
                seriesData1,
                seriesData2
              }
            }
            // 楼宇产值 -> 年度产值
            if (!isEmpty(chartHistogram)) {
              let obj = {
                2020: '',
                2021: '',
                2022: ''
              }
              chartHistogram.map((item) => {
                const { year, income } = item
                obj[year] = Number(income.toFixed(2))
              })
              this.BuildOutputAnnualOutput = {
                xAxisData: ['2020', '2021', '2022'],
                seriesData: Object.values(obj)
              }
            }
            // 楼宇产值 -> 租赁合同状态
            if (!isEmpty(chartSeasonIndustryType)) {
              this.BuildOutputLeaseStatus = chartSeasonIndustryType.map((item) => {
                const { name, income: value } = item
                return {
                  name,
                  value: Number(value.toFixed(2))
                }
              })
            }
            // 楼宇产值 -> 楼宇产值分布
            if (!isEmpty(chartAssetCount)) {
              this.BuildOutputDistribute = chartAssetCount.map((item) => {
                const { count: value, label: name } = item
                return {
                  name,
                  value
                }
              })
            }
            // 楼宇产值 -> 单位面积产值排名
            if (!isEmpty(unitAreaTaxRank)) {
              this.BuildOutputRank = unitAreaTaxRank.slice(0, 10).map((item) => {
                const { C_ProjectName: name, value: num } = item
                return {
                  name,
                  num: Number(num.toFixed(2))
                }
              })
            }
            // 楼宇产值 -> 总产值排名
            if (!isEmpty(rank)) {
              this.BuildOutputRankTotalRank = rank.slice(0, 10).map((item) => {
                let { C_ProjectName: name, income: value, rate } = item
                let status = 1
                if (rate < 0) {
                  status = 0
                }
                let per = Number(Math.abs(rate).toFixed(2))
                value = Number(value.toFixed(2))
                return {
                  name,
                  value,
                  status,
                  per
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getBuildingIncomeInfo', e)
          return false
        })
    },
    // 楼税收值
    getBuildingTaxInfo() {
      request({
        url: '/getBuildingTaxInfo',
        isParams: true,
        method: 'get',
        data: {
          yearNew: 2022,
          yearOld: 2021
        }
      })
        .then(({ data }) => {
          // console.log('getBuildingTaxInfo', data)
          if (!isEmpty(data)) {
            const {
              totalTaxAmount,
              rate,
              avg,
              moreThanTenMillion,
              moreThanBillions,
              chartSeason,
              chartHistogram,
              chartSeasonIndustryType,
              chartAssetCount,
              unitAreaTaxRank,
              rank
            } = data
            // 楼税收值 -> 总体数据
            this.BuildTaxAggregateMap = {
              icon: '/static/child2Img/ManageOperate/common/总产值.png',
              name: '总产值',
              num: Number((totalTaxAmount / 10000).toFixed(2)),
              unit: '亿',
              status: 1,
              per: rate
            }
            this.BuildTaxAggregateList = [
              {
                icon: '/static/child2Img/ManageOperate/common/单位面积平均产值.png',
                name: '单位面积平均产值',
                num: Number(avg.toFixed(2)),
                unit: '万元/㎡'
              },
              {
                icon: '/static/child2Img/ManageOperate/common/亿元税收楼宇.png',
                name: '亿元税收楼宇',
                num: Number(moreThanTenMillion.toFixed(2)),
                unit: '座'
              },
              {
                icon: '/static/child2Img/ManageOperate/common/千万元税收楼宇.png',
                name: '千万元税收楼宇',
                num: Number(moreThanBillions.toFixed(2)),
                unit: '座'
              }
            ]
            // 楼税收值 -> 季度税收
            if (!isEmpty(chartSeason)) {
              let obj = {
                2021: [],
                2022: []
              }
              chartSeason.forEach((item) => {
                let { taxAmount: income, year } = item
                income = Number(income.toFixed(2))
                obj[year].push(income)
              })
              let seriesData1 = obj[2021]
              let seriesData2 = obj[2022]
              this.BuildTaxQuarterlyOutput = {
                xAxisData: ['一季度', '二季度', '三季度', '四季度'],
                seriesData1,
                seriesData2
              }
            }
            // 楼税收值 -> 年度税收
            if (!isEmpty(chartHistogram)) {
              let obj = {
                2020: '',
                2021: '',
                2022: ''
              }
              chartHistogram.map((item) => {
                const { year, taxAmount: income } = item
                obj[year] = Number(income.toFixed(2))
              })
              this.BuildTaxAnnualOutput = {
                xAxisData: ['2020', '2021', '2022'],
                seriesData: Object.values(obj)
              }
            }
            // 楼税收值 -> 当前季度核心产业税收分布
            if (!isEmpty(chartSeasonIndustryType)) {
              this.BuildTaxLeaseStatus = chartSeasonIndustryType.map((item) => {
                const { name, taxAmount: value } = item
                return {
                  name,
                  value: Number(value.toFixed(2))
                }
              })
            }
            // 楼税收值 -> 楼宇税收分布
            if (!isEmpty(chartAssetCount)) {
              this.BuildTaxDistribute = chartAssetCount.map((item) => {
                const { count: value, label: name } = item
                return {
                  name,
                  value
                }
              })
            }
            // 楼税收值 -> 单位面积排名
            if (!isEmpty(unitAreaTaxRank)) {
              this.BuildTaxRank = unitAreaTaxRank.slice(0, 10).map((item) => {
                const { C_ProjectName: name, value: num } = item
                return {
                  name,
                  num: Number(num.toFixed(2))
                }
              })
            }
            // 楼税收值 -> 总税收排名
            if (!isEmpty(rank)) {
              this.BuildTaxTotalRank = rank.slice(0, 10).map((item) => {
                let { C_ProjectName: name, taxAmount: value, rate } = item
                let status = 1
                if (rate < 0) {
                  status = 0
                }
                let per = Number(Math.abs(rate).toFixed(2))
                value = Number(value.toFixed(2))
                return {
                  name,
                  value,
                  status,
                  per
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getBuildingTaxInfo', e)
          return false
        })
    },
    // 物业管理
    getPropertyManagement() {
      request({
        url: '/getPropertyManagement',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getPropertyManagement', data)
          if (!isEmpty(data)) {
            const { charge, rank, count, assetParkingCount } = data
            // 物业管理 -> 物业收费
            if (!isEmpty(charge)) {
              const { cleaningfees, waterAveragePrice, electricityAveragePrice } = charge
              this.PropertyManagePropertyCharges = [
                {
                  icon: '/static/child2Img/ManageOperate/PropertyManage/物业费均价.png',
                  name: '物业费均价',
                  num: cleaningfees,
                  unit: '元/㎡/月'
                },
                {
                  icon: '/static/child2Img/ManageOperate/PropertyManage/水费均价.png',
                  name: '水费均价',
                  num: waterAveragePrice,
                  unit: '元/吨'
                },
                {
                  icon: '/static/child2Img/ManageOperate/PropertyManage/电费均价.png',
                  name: '电费均价',
                  num: electricityAveragePrice,
                  unit: '元/度'
                }
              ]
            }
            // 物业管理 -> 物业费排名
            if (!isEmpty(rank)) {
              this.PropertyManagePropertyCostRank = rank.slice(0, 10).map((item) => {
                const { name, cleaningfees: value } = item
                return {
                  name,
                  value: Number(value.toFixed(2))
                }
              })
            }
            // 物业管理 -> 车位数量
            if (!isEmpty(count)) {
              const { upParkingspace, downParkingspace } = count
              this.PropertyManageParkSpaceMap.value = upParkingspace + downParkingspace
              this.PropertyManageParkSpaceList = [
                {
                  name: '地上',
                  value: upParkingspace
                },
                {
                  name: '地下',
                  value: downParkingspace
                }
              ]
            }
            // 物业管理 -> 车位数量
            if (!isEmpty(assetParkingCount)) {
              this.PropertyManageParkSpaceRank = assetParkingCount.map((item) => {
                const { name: carrier, totalParkingspace: total, upParkingspace: up, downParkingspace: down } = item
                return {
                  carrier,
                  total,
                  up,
                  down
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getPropertyManagement', e)
          return false
        })
    },
    // 能耗分析
    getEnergyAnalysis() {
      request({
        url: '/getEnergyAnalysis',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getEnergyAnalysis', data)
          if (!isEmpty(data)) {
            const { analysis, trend, waterRank, electricRank } = data
            // 能耗分析 -> 本月能耗
            if (!isEmpty(analysis)) {
              const {
                waterAmountThisMonth,
                avgWaterAmount,
                waterAmountThisYear,
                electricAmountThisMonth,
                avgElectricAmount,
                electricAmountThisYear
              } = analysis
              this.EnergyAnalysisMonthEnergyWater = [
                {
                  name: '本月累计用水',
                  num: waterAmountThisMonth,
                  unit: '吨'
                },
                {
                  name: '单位面积平均用水',
                  num: avgWaterAmount,
                  unit: '吨/㎡/月'
                },
                {
                  name: '本年累计用水',
                  num: waterAmountThisYear,
                  unit: '吨'
                }
              ]
              this.EnergyAnalysisMonthEnergyElectric = [
                {
                  name: '本月累计用电',
                  num: electricAmountThisMonth,
                  unit: '度'
                },
                {
                  name: '单位面积平均用电',
                  num: avgElectricAmount,
                  unit: '度/㎡/月'
                },
                {
                  name: '本年累计用电',
                  num: electricAmountThisYear,
                  unit: '度'
                }
              ]
            }
            // 能耗分析 -> 用能趋势
            if (!isEmpty(trend)) {
              let xAxisData = []
              let seriesData1 = []
              let seriesData2 = []
              trend.forEach((item) => {
                const { month, water, electric } = item
                xAxisData.push(month)
                seriesData1.push(water)
                seriesData2.push(electric)
              })
              this.EnergyAnalysisTrend = {
                xAxisData,
                seriesData1,
                seriesData2
              }
            }
            // 能耗分析 -> 单位面积用水排名
            if (!isEmpty(waterRank)) {
              this.EnergyAnalysisWaterRank = waterRank.slice(0, 10).map((item) => {
                const { name, waterAmount: value } = item
                return {
                  name,
                  value
                }
              })
            }
            // 能耗分析 -> 单位面积用电排名
            if (!isEmpty(electricRank)) {
              this.EnergyAnalysisElectricRank = electricRank.slice(0, 10).map((item) => {
                const { name, electricAmount: value } = item
                return {
                  name,
                  value
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getEnergyAnalysis', e)
          return false
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
export default useManageOperateStore
