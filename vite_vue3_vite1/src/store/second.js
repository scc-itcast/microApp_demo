/*
 * @Description: 公共数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-01-13 14:49:16
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\common.js
 */
import { defineStore } from 'pinia'
import useCommonStore from '@/store/common'
// import useLeaseInvestStore from '@/store/leaseInvest'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useSecondStore = defineStore('second', {
  state: () => {
    return {
      // 载体名称
      assetName: '紫光大厦',
      // 获取所有楼层
      floorList: [
        '15层',
        '14层',
        '13层',
        '12层',
        '11层',
        '10层',
        '9层',
        '8层',
        '7层',
        '6层',
        '5层',
        '4层',
        '3层',
        '2层',
        '1层',
        '-1层',
        '-2层'
      ],
      // 获取所有楼层信息
      selectFloorIndex: null,
      floorDetailList: [],
      // 紫光大厦
      PurpleBuild: [
        {
          icon: '/static/child2Img/Second/PurpleBuild/建筑面积.png',
          name: '建筑面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/出租利用率.png',
          name: '出租利用率',
          num: '-',
          unit: '%'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/入驻企业.png',
          name: '入驻企业',
          num: '-',
          unit: '家'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/企业社保缴纳人数.png',
          name: '企业社保缴纳人数',
          num: '-',
          unit: '人'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/年产值.png',
          name: '年产值',
          num: '-',
          unit: '万'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/年税收金额.png',
          name: '年税收金额',
          num: '-',
          unit: '万'
        },
        {
          icon: '/static/child2Img/Second/PurpleBuild/年补贴金额.png',
          name: '年补贴金额',
          num: '-',
          unit: '万'
        }
      ],
      PurpleBuildIntroduction:
        '这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介这里是载体简介',
      // 载体标签
      CarrierLabel: ['社会性载体', '千万级税收载体', '2022年五星级楼宇', '苏州市金牌楼宇', '苏州市特色楼宇'],
      CarrierLabelStarMap: {
        一星: 1,
        二星: 2,
        三星: 3,
        四星: 4,
        五星: 5
      },
      CarrierLabelMap: {
        level: 5,
        time: '2022-12-27',
        year: '2020'
      },
      // 载体经营 -> 列表
      CarrierManageNames: ['总产值', '总税收', '当年单位面积产值', '当年单位面积税收'],
      CarrierManage: [
        {
          icon: '/static/child2Img/Second/CarrierManage/总产值.png',
          name: '总产值',
          num: '-',
          status: 1,
          per: '-'
        },
        {
          icon: '/static/child2Img/Second/CarrierManage/总税收.png',
          name: '总税收',
          num: '-',
          status: 1,
          per: '-'
        },
        {
          icon: '/static/child2Img/Second/CarrierManage/当年单位面积产值.png',
          name: '当年单位面积产值',
          num: '-',
          status: 1,
          per: '-'
        },
        {
          icon: '/static/child2Img/Second/CarrierManage/当年单位面积税收.png',
          name: '当年单位面积税收',
          num: '-',
          status: 0,
          per: '-'
        }
      ],
      // 载体经营 -> 年度经营数据
      CarrierManageOperating: {
        xAxisData: ['2020', '2021', '2022', '2023'],
        seriesData1: [0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0],
        seriesData3: [0, 0, 0, 0]
      },
      // 入驻企业 -> 高质量企业表
      SettledEnterpriseHighQuality: [
        {
          icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
          name: '市级以上总部企业',
          num: '-'
        },
        {
          icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
          name: '区级总部企业',
          num: '-'
        },
        {
          icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
          name: '潜力企业',
          num: '-'
        }
      ],
      // 入驻企业 -> 硕士研究生及以上学历人数
      SettledEnterpriseEducation: [
        {
          name: '0-50人',
          value: '0'
        },
        {
          name: '50-100人',
          value: '0'
        },
        {
          name: '100-150人',
          value: '0'
        }
      ],
      // 入驻企业 -> 企业规模分布
      SettledEnterpriseScaleDistribute: [
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
      // 入驻企业 -> 企业税收排名
      SettledEnterpriseTaxRank: [
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
      // 入驻企业 -> 企业社保缴纳及企业荣誉
      SettledEnterpriseSocialHonor: [
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        },
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        },
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        },
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        },
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        },
        {
          value1: '企业名称企业名称',
          value2: '-人',
          value3: '-个'
        }
      ],
      // 产业分布
      IndustrialDistribute: {
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
      // 载体租赁 -> 总体数据
      CarrierLeaseAggregate: [
        {
          icon: '/static/child2Img/Second/CarrierLease/载体可经租面积.png',
          name: '载体可经租面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Second/CarrierLease/地上层数.png',
          name: '地上层数',
          num: '-',
          unit: '层'
        },
        {
          icon: '/static/child2Img/Second/CarrierLease/地下层数.png',
          name: '地下层数',
          num: '-',
          unit: '层'
        },
        {
          icon: '/static/child2Img/Second/CarrierLease/面积.png',
          name: '地上面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Second/CarrierLease/面积.png',
          name: '地下面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Second/CarrierLease/租赁均价.png',
          name: '租赁均价',
          num: '-',
          unit: '元/㎡/月'
        }
      ],
      // 载体租赁 -> 租赁状态
      CarrierLeaseStatus: [
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
      // 载体租赁 -> 租赁合同状态
      CarrierLeaseContractStatus: [
        {
          name: '待生效',
          value: '356711.5',
          per: '-'
        },
        {
          name: '执行中',
          value: '356711.5',
          per: '-'
        },
        {
          name: '已到期',
          value: '356711.5',
          per: '-'
        }
      ],
      // 载体租赁 -> 企业租赁面积排名
      CarrierLeaseAreaRank: [
        {
          name: '这里是载体名称这里是载体名称',
          value: '1340'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1340'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1340'
        },
        {
          name: '这里是载体名称这里是载体名称',
          value: '1340'
        }
      ],
      // 载体租赁 -> 租赁时长分布
      CarrierLeaseDurate: [
        {
          name: '0-6个月',
          value: 30
        },
        {
          name: '6个月-1年',
          value: 40
        },
        {
          name: '1年-3年',
          value: 30
        },
        {
          name: '3年以上',
          value: 50
        }
      ],
      // 载体运维 -> 总体数据
      CarrierOperateAggregate: [
        {
          icon: '/static/child2Img/Second/CarrierOperate/物业费均价.png',
          name: '物业费均价',
          num: '-',
          unit: '元/㎡/月'
        },
        {
          icon: '/static/child2Img/Second/CarrierOperate/水费均价.png',
          name: '水费均价',
          num: '-',
          unit: '元/吨'
        },
        {
          icon: '/static/child2Img/Second/CarrierOperate/电费均价.png',
          name: '电费均价',
          num: '-',
          unit: '元/度'
        },
        {
          icon: '/static/child2Img/Second/CarrierOperate/车位.png',
          name: '车位总数',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Second/CarrierOperate/车位.png',
          name: '地上车位总数',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Second/CarrierOperate/车位.png',
          name: '地下车位总数',
          num: '-',
          unit: '个'
        }
      ],
      // 载体运维 -> 用水量月度趋势
      CarrierOperateWaterTrend: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData: [0, 0, 0]
      },
      // 载体运维 -> 用电量月度趋势
      CarrierOperateElectricTrend: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData: [0, 0, 0]
      },
      // 载体运维 -> 用水量/用电量年度趋势
      CarrierOperateWaterElectricTrend: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData1: [0, 0, 0],
        seriesData2: [0, 0, 0]
      },
      // 载体运维 -> 空置租赁面积年度趋势
      CarrierOperateEmptyAreaTrend: {
        xAxisData: ['2020', '2021', '2022', '2023'],
        seriesData1: [0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0]
      }
    }
  },
  actions: {
    getBackInterface(bol = true) {
      if (bol) {
        this.getFloorDetailByBuildingId() // 获取所有楼层
        this.getSettledEnterprise() // 资产信息
        this.getAssetRent() // 载体租赁 and 载体运维
        this.getIndustrialDistribute() // 产业分布
      }
    },
    // 获取所有楼层
    getFloorDetailByBuildingId() {
      const commonStore = useCommonStore()
      request({
        url: '/getFloorDetailByBuildingId',
        isParams: true,
        method: 'get',
        data: {
          buildingId: commonStore.assetId || 5
        }
      })
        .then(({ data }) => {
          // console.log('getFloorDetailByBuildingId', data)
          if (!isEmpty(data)) {
            this.floorList = data.map((item) => item.floorNumber)
            this.floorDetailList = data
            return true
          }
        })
        .catch((e) => {
          console.log('getFloorDetailByBuildingId', e)
          return false
        })
    },
    // 资产信息
    getSettledEnterprise() {
      const commonStore = useCommonStore()
      request({
        url: '/getSettledEnterprise',
        isParams: true,
        method: 'get',
        data: {
          assetId: commonStore.assetId || 5
          // year: 2022
        }
      })
        .then(({ data }) => {
          // console.log('getSettledEnterprise', data)
          if (!isEmpty(data)) {
            const { base, tags, starList, operation, annualOperation, high, master, scale, rank, employmentAndHonor } =
              data
            // 载体基础信息
            if (!isEmpty(base)) {
              const { name, note, area, rate, clientCount, employeenoCount, income, taxAmount, policy } = base
              this.assetName = name
              if (note) {
                this.PurpleBuildIntroduction = note
              }
              this.PurpleBuild = [
                {
                  icon: '/static/child2Img/Second/PurpleBuild/建筑面积.png',
                  name: '建筑面积',
                  num: area,
                  unit: '㎡'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/出租利用率.png',
                  name: '出租利用率',
                  num: Number(rate.toFixed(2)),
                  unit: '%'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/入驻企业.png',
                  name: '入驻企业',
                  num: clientCount,
                  unit: '家'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/企业社保缴纳人数.png',
                  name: '企业社保缴纳人数',
                  num: employeenoCount,
                  unit: '人'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/年产值.png',
                  name: '年产值',
                  num: income,
                  unit: '万'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/年税收金额.png',
                  name: '年税收金额',
                  num: taxAmount,
                  unit: '万'
                },
                {
                  icon: '/static/child2Img/Second/PurpleBuild/年补贴金额.png',
                  name: '年补贴金额',
                  num: policy,
                  unit: '万'
                }
              ]
            }
            // 载体标签
            if (!isEmpty(tags)) {
              let CarrierLabel = []
              const { isFreeAssets, tenMillion, star, gold, characteristic } = tags
              if (Number(isFreeAssets) == 1) CarrierLabel.push('社会性载体')
              if (Number(tenMillion) == 1) CarrierLabel.push('千万级税收载体')
              if (Number(star) == 1) CarrierLabel.push('2022年五星级楼宇')
              if (Number(gold) == 1) CarrierLabel.push('苏州市金牌楼宇')
              if (Number(characteristic) == 1) CarrierLabel.push('苏州市特色楼宇')
              this.CarrierLabel = CarrierLabel
            }
            // 载体标签 -> 列表
            if (!isEmpty(starList)) {
              const { buildingStarLevelName: level } = starList
              this.StarRating = {
                ...starList,
                level: this.CarrierLabelStarMap[level]
              }
            }
            // 载体经营 -> 列表
            if (!isEmpty(operation)) {
              let CarrierManage = []
              operation.forEach((item, index) => {
                const { label, rate, value } = item
                let status = 1
                let per = '-'
                if (rate < 0) {
                  status = 0
                  per = Math.abs(rate)
                } else {
                  per = rate
                }
                per = Math.floor(per * 100) / 100
                let CarrierManageName = this.CarrierManageNames[index]
                CarrierManage[index] = {}
                CarrierManage[index].icon = `static/child2Img/Second/CarrierManage/${CarrierManageName}.png`
                CarrierManage[index].name = label
                CarrierManage[index].num = value
                CarrierManage[index].status = status
                CarrierManage[index].per = per
                this.CarrierManage = CarrierManage
              })
            }
            // 载体经营 -> 年度经营数据
            if (!isEmpty(annualOperation)) {
              let obj = {
                income: {
                  2019: 0,
                  2020: 0,
                  2021: 0,
                  2022: 0
                },
                taxAmount: {
                  2019: 0,
                  2020: 0,
                  2021: 0,
                  2022: 0
                },
                policy: {
                  2019: 0,
                  2020: 0,
                  2021: 0,
                  2022: 0
                }
              }
              annualOperation.forEach((item) => {
                const { amount, type, year } = item
                obj[type][year] = Number(amount.toFixed(2))
              })
              this.CarrierManageOperating = {
                xAxisData: ['2019', '2020', '2021', '2022'],
                seriesData1: Object.values(obj.income),
                seriesData2: Object.values(obj.taxAmount),
                seriesData3: Object.values(obj.policy)
              }
            }
            // 入驻企业 -> 高质量企业表
            if (!isEmpty(high)) {
              const { cityLevelCount, districtLevelCount, potentialCount } = high
              this.SettledEnterpriseHighQuality = [
                {
                  icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
                  name: '市级以上总部企业',
                  num: cityLevelCount
                },
                {
                  icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
                  name: '区级总部企业',
                  num: districtLevelCount
                },
                {
                  icon: '/static/child2Img/Second/SettledEnterprise/高质量企业.png',
                  name: '潜力企业',
                  num: potentialCount
                }
              ]
            }
            // 入驻企业 -> 硕士研究生及以上学历人数
            if (!isEmpty(master)) {
              this.SettledEnterpriseEducation = master.map((item) => {
                const { count: value, label: name } = item
                return {
                  ...item,
                  name,
                  value
                }
              })
            }
            // 入驻企业 -> 企业规模分布
            if (!isEmpty(scale)) {
              this.SettledEnterpriseScaleDistribute = scale.map((item) => {
                const { count: value, label: name } = item
                return {
                  ...item,
                  name,
                  value
                }
              })
            }
            // 入驻企业 -> 企业税收排名
            if (!isEmpty(rank)) {
              let len = rank.length
              let list = new Array(len).fill({})
              if (len >= 10) {
                list = new Array(10).fill({})
              }
              rank.forEach((item) => {
                const { C_clientname: name, rank, id, taxAmount: value, rate } = item
                let status = 1
                let per = '-'
                if (rate) {
                  if (rate < 0) {
                    status = 0
                    per = Math.abs(rate)
                  } else {
                    per = rate
                  }
                  per = Math.floor(per * 100) / 100
                }
                if (rank <= 10) {
                  let obj = {
                    id,
                    name,
                    value: value || '-',
                    status,
                    per
                  }
                  list[rank - 1] = obj
                }
              })
              this.SettledEnterpriseTaxRank = list
            }
            // 入驻企业 -> 企业社保缴纳及企业荣誉
            if (!isEmpty(employmentAndHonor)) {
              this.SettledEnterpriseSocialHonor = employmentAndHonor.map((item) => {
                const { name: value1, employmentNumber: value2, honorCount: value3 } = item
                return {
                  value1,
                  value2: `${value2}人`,
                  value3: `${value3}个`
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getSettledEnterprise', e)
          return false
        })
    },
    // 产业分布
    getIndustrialDistribute() {
      const commonStore = useCommonStore()
      request({
        url: '/getIndustryByBuildingId',
        isParams: true,
        method: 'get',
        data: {
          buildingId: commonStore.assetId || 5
        }
      })
        .then(({ data }) => {
          // console.log('getIndustryByBuildingId', data)
          if (!isEmpty(data)) {
            let obj = {
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
            data.list.forEach((item) => {
              const { name, clientCount } = item
              obj[name] = clientCount
            })
            this.IndustrialDistribute = obj
            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryByBuildingId', e)
          return false
        })
    },
    // 载体租赁 and 载体运维
    getAssetRent() {
      const commonStore = useCommonStore()
      // const leaseInvestStore = useLeaseInvestStore()
      request({
        url: '/getAssetRent',
        isParams: true,
        method: 'get',
        data: {
          assetId: commonStore.assetId || 5
        }
      })
        .then(({ data }) => {
          // console.log('getAssetRent', data)
          if (!isEmpty(data)) {
            const {
              base,
              rentStatus,
              contractStatus,
              areaRank,
              durationDistribution,
              overall,
              water,
              electric,
              overYearRent
            } = data
            // 载体租赁 -> 总体数据
            if (!isEmpty(base)) {
              const { rentableArea, upCount, downCount, upArea, downArea, avg } = base
              this.CarrierLeaseAggregate = [
                {
                  icon: '/static/child2Img/Second/CarrierLease/载体可经租面积.png',
                  name: '载体可经租面积',
                  num: rentableArea,
                  unit: '㎡'
                },
                {
                  icon: '/static/child2Img/Second/CarrierLease/地上层数.png',
                  name: '地上层数',
                  num: upCount,
                  unit: '层'
                },
                {
                  icon: '/static/child2Img/Second/CarrierLease/地下层数.png',
                  name: '地下层数',
                  num: downCount,
                  unit: '层'
                },
                {
                  icon: '/static/child2Img/Second/CarrierLease/面积.png',
                  name: '地上面积',
                  num: upArea,
                  unit: '㎡'
                },
                {
                  icon: '/static/child2Img/Second/CarrierLease/面积.png',
                  name: '地下面积',
                  num: downArea,
                  unit: '㎡'
                },
                {
                  icon: '/static/child2Img/Second/CarrierLease/租赁均价.png',
                  name: '租赁均价',
                  num: avg,
                  unit: '元/㎡/月'
                }
              ]
            }
            // 载体租赁 -> 租赁状态
            if (!isEmpty(rentStatus)) {
              let { reserveArea, rentArea, totalArea } = rentStatus
              reserveArea = reserveArea || 0
              rentArea = rentArea || 0
              totalArea = totalArea || 0
              const empty = Number((totalArea - rentArea - reserveArea).toFixed(2))
              this.CarrierLeaseStatus = [
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
            // 载体租赁 -> 租赁合同状态
            if (!isEmpty(contractStatus)) {
              const { toBeEffective, takeEffect, overdue } = contractStatus
              const total = toBeEffective + takeEffect + overdue
              this.CarrierLeaseContractStatus = [
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
            // 载体租赁 -> 企业租赁面积排名
            if (!isEmpty(areaRank)) {
              let len = areaRank.length
              let list = new Array(len).fill({})
              if (len >= 10) {
                list = new Array(10).fill({})
              }
              areaRank.forEach((item) => {
                const { name, area, rank, clientId: id } = item
                if (rank <= 10) {
                  let obj = {
                    id,
                    name,
                    value: area || '-'
                  }
                  list[rank - 1] = obj
                }
                this.CarrierLeaseAreaRank = list
              })
            }
            // 载体租赁 -> 租赁时长分布
            if (!isEmpty(durationDistribution)) {
              this.CarrierLeaseDurate = durationDistribution.map((item) => {
                const { label: name } = item
                return {
                  ...item,
                  name
                }
              })
            }
            // 载体运维 -> 总体数据
            if (!isEmpty(overall)) {
              const {
                cleaningfees,
                waterAveragePrice,
                electricityAveragePrice,
                totalParkingspace,
                upParkingspace,
                downParkingspace
              } = overall
              this.CarrierOperateAggregate = [
                {
                  icon: '/static/child2Img/Second/CarrierOperate/物业费均价.png',
                  name: '物业费均价',
                  num: cleaningfees,
                  unit: '元/㎡/月'
                },
                {
                  icon: '/static/child2Img/Second/CarrierOperate/水费均价.png',
                  name: '水费均价',
                  num: waterAveragePrice,
                  unit: '元/吨'
                },
                {
                  icon: '/static/child2Img/Second/CarrierOperate/电费均价.png',
                  name: '电费均价',
                  num: electricityAveragePrice,
                  unit: '元/度'
                },
                {
                  icon: '/static/child2Img/Second/CarrierOperate/车位.png',
                  name: '车位总数',
                  num: totalParkingspace,
                  unit: '个'
                },
                {
                  icon: '/static/child2Img/Second/CarrierOperate/车位.png',
                  name: '地上车位总数',
                  num: upParkingspace,
                  unit: '个'
                },
                {
                  icon: '/static/child2Img/Second/CarrierOperate/车位.png',
                  name: '地下车位总数',
                  num: downParkingspace,
                  unit: '个'
                }
              ]
            }
            // 载体运维 -> 用水量/用电量年度趋势
            if (!isEmpty(water) && !isEmpty(electric)) {
              let waterObj = {
                2021: 0,
                2022: 0,
                2023: 0
              }
              water.forEach((item) => {
                const { water: w, year } = item
                waterObj[year] = w
              })
              // 载体运维 -> 用水量月度趋势
              this.CarrierOperateWaterTrend = {
                xAxisData: ['2021', '2022', '2023'],
                seriesData: Object.values(waterObj)
              }

              let electricObj = {
                2021: 0,
                2022: 0,
                2023: 0
              }
              electric.forEach((item) => {
                const { electric: e, year } = item
                electricObj[year] = e
              })
              // 载体运维 -> 用电量月度趋势
              this.CarrierOperateElectricTrend = {
                xAxisData: ['2021', '2022', '2023'],
                seriesData: Object.values(electricObj)
              }
              this.CarrierOperateWaterElectricTrend = {
                xAxisData: ['2021', '2022', '2023'],
                seriesData1: Object.values(waterObj),
                seriesData2: Object.values(electricObj)
              }
            }
            // 载体运维 -> 空置租赁面积年度趋势
            if (!isEmpty(overYearRent)) {
              let emptyAreaObj = {
                2020: 0,
                2021: 0,
                2022: 0,
                2023: 0
              }
              overYearRent.forEach((item) => {
                const { rentArea: w, year } = item
                emptyAreaObj[year] = w
              })
              this.CarrierOperateEmptyAreaTrend = {
                xAxisData: ['2020', '2021', '2022', '2023'],
                seriesData: Object.values(emptyAreaObj)
              }
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getAssetRent', e)
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
export default useSecondStore
