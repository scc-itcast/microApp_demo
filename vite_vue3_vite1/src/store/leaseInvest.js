/*
 * @Description: 公共数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-01-13 14:49:18
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\leaseInvest.js
 */
import { defineStore } from 'pinia'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useLeaseInvestStore = defineStore('leaseInvest', {
  state: () => {
    return {
      // 楼宇租赁 -> 总体数据
      BuildTenancyAggregateMap: {
        icon: '/static/child2Img/LeaseInvest/BuildTenancy/总资产面积.png',
        name: '总资产面积',
        num: '-',
        unit: '㎡'
      },
      BuildTenancyAggregateEcharts: [
        {
          name: '地上',
          value: '2000.884'
        },
        {
          name: '地下',
          value: '460.883'
        }
      ],
      BuildTenancyAggregateList: [
        {
          icon: '/static/child2Img/LeaseInvest/BuildTenancy/可经租建筑面积.png',
          name: '可经租建筑面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/LeaseInvest/BuildTenancy/已出租面积.png',
          name: '已出租面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/LeaseInvest/BuildTenancy/空置面积.png',
          name: '空置面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/LeaseInvest/BuildTenancy/出租率.png',
          name: '出租率',
          num: '-',
          unit: '%'
        }
      ],
      // 楼宇租赁 -> 建筑面积分布
      BuildTenancyArchitecture: [
        {
          name: '社会性质',
          value: '92.5'
        },
        {
          name: '自有资产',
          value: '7.5'
        }
      ],
      // 楼宇租赁 -> 可出租面积分布
      BuildTenancyRentable: [
        {
          name: '社会性质',
          value: '92.5'
        },
        {
          name: '自有资产',
          value: '7.5'
        }
      ],
      // 楼宇租赁 -> 已出租面积分布
      BuildTenancyLeased: [
        {
          name: '社会性质',
          value: '92.5'
        },
        {
          name: '自有资产',
          value: '7.5'
        }
      ],
      // 楼宇租赁 -> 空置面积分布
      BuildTenancyVacant: [
        {
          name: '社会性质',
          value: '92.5'
        },
        {
          name: '自有资产',
          value: '7.5'
        }
      ],
      // 楼宇租赁 -> 租赁状态
      BuildTenancyLeaseStatus: [
        {
          name: '空置',
          value: '356711.5',
          per: '-'
        },
        {
          name: '租赁',
          value: '356711.5',
          per: '-'
        },
        {
          name: '预定',
          value: '356711.5',
          per: '-'
        }
      ],
      // 楼宇租赁 -> 租赁合同状态
      BuildTenancyContractStatus: [
        {
          name: '空置',
          value: '356711.5',
          per: '-'
        },
        {
          name: '租赁',
          value: '356711.5',
          per: '-'
        },
        {
          name: '预定',
          value: '356711.5',
          per: '-'
        }
      ],
      // 楼宇租赁 -> 载体空置情况
      BuildTenancyCarrierVacancy: [
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        },
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        },
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        },
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        },
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        },
        {
          carrier: '企业名称企业名称',
          area: '3000㎡'
        }
      ],
      // 楼宇租赁 -> 载体建筑面积排名
      BuildTenancyAreaRank: [
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '100234.79'
        }
      ],
      // 楼宇租赁 -> 载体出租率排名
      BuildTenancyRentalRank: [
        {
          name: '载体名称载体名称载体名称',
          per: '78.99'
        },
        {
          name: '载体名称载体名称载体名称',
          per: '68.35'
        },
        {
          name: '载体名称载体名称载体名称',
          per: '78.99'
        },
        {
          name: '载体名称载体名称载体名称',
          per: '48.90'
        },
        {
          name: '载体名称载体名称载体名称',
          per: '37.62'
        },
        {
          name: '载体名称载体名称载体名称',
          per: '12.04'
        }
      ],
      // 楼宇租赁 -> 租赁时长分布
      BuildTenancyLeaseTime: [
        {
          name: '0-6个月',
          value: 40
        },
        {
          name: '6个月-1年',
          value: 40
        },
        {
          name: '1年-3年',
          value: 50
        },
        {
          name: '3年以上',
          value: 30
        }
      ],
      // 企业入驻 -> 企业数量走势
      EnterpriseSettleTrend: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData1: [0, 0, 0],
        seriesData2: [0, 0, 0]
      },
      // 企业入驻 -> 企业入驻数排名
      EnterpriseSettleEntryRank: [
        {
          name: '载体名称载体名称载体名称',
          value: '100'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '78'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '45'
        },
        {
          name: '载体名称载体名称载体名称',
          value: '45'
        }
      ],
      // 企业入驻 -> 企业规模分布
      EnterpriseSettleScaleDistribute: [
        {
          name: '0-50人',
          value: 40
        },
        {
          name: '50-100人',
          value: 40
        },
        {
          name: '100-150人',
          value: 50
        },
        {
          name: '150-200人',
          value: 30
        },
        {
          name: '200人以上',
          value: 50
        }
      ],
      // 企业入驻 -> 企业税收规模分布
      EnterpriseSettleTaxDistribut: {
        xAxisData: ['0-1000万元', '1000-3000万元', '3000-5000万元', '5000万元-1亿元', '1亿元-1.5亿元', '1.5亿元以上'],
        seriesData: [0, 0, 0, 0, 0, 0]
      },
      // 企业入驻 -> 企业荣誉排名
      HonorRankMap: {
        icon: '/static/child2Img/LeaseInvest/HonorRank/企业荣誉总数.png',
        name: '企业荣誉总数',
        num: '-',
        unit: '个'
      },
      HonorRankList: [
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        },
        {
          name: '企业名称企业名称企业名称企业名称',
          value: '-'
        }
      ]
    }
  },
  actions: {
    getBackInterface(bol) {
      if (bol) {
        this.getProjectKpi() // 楼宇租赁 -> 总体数据
        this.getAreaDistribution() // 楼宇租赁 -> 面积分布
        this.getProjectRank() // 楼宇租赁 -> 载体空置情况/载体建筑面积排名/载体出租率排名
        this.getClientScale() // 楼宇租赁 -> 租赁状态/租赁合同状态/租赁时常分布/企业入驻 -> 企业规模分布
        this.getClientSettleIn() // 企业入驻 -> 企业入驻数排名/企业税收规模分布
        this.getHonorRank() // 企业入驻 -> 企业荣誉排名
      }
    },
    // 楼宇租赁 -> 总体数据
    getProjectKpi() {
      request({
        url: '/getProjectKpi',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getProjectKpi', data)
          if (!isEmpty(data)) {
            const { totalArea, upArea, downArea, rentableArea, rentArea } = data
            this.BuildTenancyAggregateMap.num = totalArea
            this.BuildTenancyAggregateEcharts = [
              {
                name: '地上',
                value: upArea
              },
              {
                name: '地下',
                value: downArea
              }
            ]
            let empty = Number((rentableArea - rentArea).toFixed(2))
            let rate = Number(((rentArea / rentableArea) * 100).toFixed(2))
            this.BuildTenancyAggregateList = [
              {
                icon: '/static/child2Img/LeaseInvest/BuildTenancy/可经租建筑面积.png',
                name: '可经租建筑面积',
                num: rentableArea,
                unit: '㎡'
              },
              {
                icon: '/static/child2Img/LeaseInvest/BuildTenancy/已出租面积.png',
                name: '已出租面积',
                num: rentArea,
                unit: '㎡'
              },
              {
                icon: '/static/child2Img/LeaseInvest/BuildTenancy/空置面积.png',
                name: '空置面积',
                num: empty,
                unit: '㎡'
              },
              {
                icon: '/static/child2Img/LeaseInvest/BuildTenancy/出租率.png',
                name: '出租率',
                num: rate,
                unit: '%'
              }
            ]
            return true
          }
        })
        .catch((e) => {
          console.log('getProjectKpi', e)
          return false
        })
    },
    // 楼宇租赁 -> 面积分布
    getAreaDistribution() {
      request({
        url: '/getAreaDistribution',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getAreaDistribution', data)
          if (!isEmpty(data)) {
            const { build, can, rent, vacant } = data
            // 楼宇租赁 -> 建筑面积分布
            if (!isEmpty(build)) {
              this.BuildTenancyArchitecture = build.map((item) => {
                const { label: name, value } = item
                return {
                  name,
                  value: value || 0
                }
              })
            }
            // 楼宇租赁 -> 可出租面积分布
            if (!isEmpty(can)) {
              this.BuildTenancyRentable = can.map((item) => {
                const { label: name, value } = item
                return {
                  name,
                  value: value || 0
                }
              })
            }
            // 楼宇租赁 -> 已出租面积分布
            if (!isEmpty(rent)) {
              this.BuildTenancyLeased = rent.map((item) => {
                const { label: name, value } = item
                return {
                  name,
                  value: value || 0
                }
              })
            }
            // 楼宇租赁 -> 空置面积分布
            if (!isEmpty(vacant)) {
              this.BuildTenancyVacant = vacant.map((item) => {
                const { label: name, value } = item
                return {
                  name,
                  value: value || 0
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getAreaDistribution', e)
          return false
        })
    },
    // 楼宇租赁 -> 载体空置情况/载体建筑面积排名/载体出租率排名
    getProjectRank() {
      request({
        url: '/getProjectRank',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getProjectRank', data)
          if (!isEmpty(data)) {
            const { vacant, build, rate } = data
            // 楼宇租赁 -> 载体空置情况
            if (!isEmpty(vacant)) {
              this.BuildTenancyCarrierVacancy = vacant.slice(0, 10).map((item) => {
                let { name: carrier, vacant: area } = item
                area = area || 0
                area = area.toFixed(2)
                return {
                  carrier,
                  area: `${area}㎡`
                }
              })
            }
            // 楼宇租赁 -> 载体建筑面积排名
            if (!isEmpty(build)) {
              this.BuildTenancyAreaRank = build.slice(0, 10).map((item) => {
                let { name, buildArea: value } = item
                value = value || 0
                value = Number(value.toFixed(2))
                return {
                  name,
                  value: value
                }
              })
            }
            // 楼宇租赁 -> 载体出租率排名
            if (!isEmpty(rate)) {
              this.BuildTenancyRentalRank = rate.slice(0, 10).map((item) => {
                let { name, rate: per } = item
                per = per || 0
                per = Number(per.toFixed(2))
                return {
                  name,
                  per: per
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getProjectRank', e)
          return false
        })
    },
    // 楼宇租赁 -> 租赁状态/租赁合同状态/租赁时常分布/企业入驻 -> 企业规模分布
    getClientScale() {
      request({
        url: '/getClientScale',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getClientScale', data)
          if (!isEmpty(data)) {
            const { rentStatus, contractStatus, duration, scale } = data
            // 楼宇租赁 -> 租赁状态
            if (!isEmpty(rentStatus)) {
              let { reserveArea, rentArea, totalArea } = rentStatus
              reserveArea = reserveArea || 0
              rentArea = rentArea || 0
              totalArea = totalArea || 0
              const empty = Number((totalArea - rentArea - reserveArea).toFixed(2))
              this.BuildTenancyLeaseStatus = [
                {
                  name: '空置',
                  value: empty,
                  per: Number(((empty / totalArea) * 100).toFixed(2))
                },
                {
                  name: '租赁',
                  value: rentArea,
                  per: Number(((rentArea / totalArea) * 100).toFixed(2))
                },
                {
                  name: '预定',
                  value: reserveArea,
                  per: Number(((reserveArea / totalArea) * 100).toFixed(2))
                }
              ]
              // leaseInvestStore.BuildTenancyLeaseStatus = this.CarrierLeaseStatus
            }
            // 楼宇租赁 -> 租赁合同状态
            if (!isEmpty(contractStatus)) {
              const { toBeEffective, takeEffect, overdue } = contractStatus
              const total = toBeEffective + takeEffect + overdue
              this.BuildTenancyContractStatus = [
                {
                  name: '待生效',
                  value: toBeEffective,
                  per: Number(((toBeEffective / total) * 100).toFixed(2))
                },
                {
                  name: '执行中',
                  value: takeEffect,
                  per: Number(((takeEffect / total) * 100).toFixed(2))
                },
                {
                  name: '已到期',
                  value: overdue,
                  per: Number(((overdue / total) * 100).toFixed(2))
                }
              ]
              // leaseInvestStore.BuildTenancyContractStatus = this.CarrierLeaseStatus
            }
            // 楼宇租赁 -> 租赁时长分布
            if (!isEmpty(duration)) {
              this.BuildTenancyLeaseTime = duration.map((item) => {
                const { label: name, value } = item
                return {
                  name,
                  value
                }
              })
            }
            // 企业入驻 -> 企业规模分布
            if (!isEmpty(scale)) {
              this.EnterpriseSettleScaleDistribute = scale.map((item) => {
                const { dict_label: name, clientCount: value } = item
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
          console.log('getClientScale', e)
          return false
        })
    },
    // 企业入驻 -> 企业入驻数排名/企业税收规模分布
    getClientSettleIn() {
      request({
        url: '/getClientSettleIn',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getClientSettleIn', data)
          if (!isEmpty(data)) {
            const { clientRank, distribution } = data
            // 企业入驻 -> 企业入驻数排名
            if (!isEmpty(clientRank)) {
              this.EnterpriseSettleEntryRank = clientRank.map((item) => {
                const { name, clientCount: value } = item
                return {
                  name,
                  value
                }
              })
            }
            // 企业入驻 -> 企业税收规模分布
            if (!isEmpty(distribution)) {
              let xAxisData = distribution.map((item) => item.label)
              let seriesData = distribution.map((item) => item.value)
              this.EnterpriseSettleTaxDistribut = {
                xAxisData,
                seriesData
              }
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getClientSettleIn', e)
          return false
        })
    },
    // 企业入驻 -> 企业荣誉排名
    getHonorRank() {
      request({
        url: '/getHonorRank',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getHonorRank', data)
          if (!isEmpty(data)) {
            this.HonorRankList = data.slice(0, 7).map((item) => {
              const { name, honorCount: value } = item
              return {
                name,
                value
              }
            })
            this.HonorRankMap.num = data.reduce((t, c) => (t = t + c.honorCount), 0)
            return true
          }
        })
        .catch((e) => {
          console.log('getHonorRank', e)
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
export default useLeaseInvestStore
