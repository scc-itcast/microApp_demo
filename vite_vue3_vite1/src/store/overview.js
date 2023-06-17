/*
 * @Description: 总体概览
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2023-02-01 11:23:08
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\overview.js
 */
import { defineStore } from 'pinia'
import useLeaseInvestStore from '@/store/leaseInvest'
import useManageOperateStore from '@/store/manageOperate'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
const useOverviewStore = defineStore('overview', {
  state: () => {
    return {
      // 楼宇载体 -> 总体数据
      BuildCarrierAggregate: [
        {
          icon: '/static/child2Img/Overview/BuildCarrier/投用楼宇数.png',
          name: '投用楼宇数',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/Overview/BuildCarrier/总建筑面积.png',
          name: '总建筑面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Overview/BuildCarrier/总可租面积.png',
          name: '总可租面积',
          num: '-',
          unit: '㎡'
        },
        {
          icon: '/static/child2Img/Overview/BuildCarrier/总空置面积.png',
          name: '总空置面积',
          num: '-',
          unit: '㎡'
        }
      ],
      // 楼宇载体 -> 总体数据-总出租率
      BuildCarrierAggregatePer: 78.88,
      // 楼宇载体 -> 载体分类统计
      BuildCarrierCarrierClass: {
        ownAssetProjectCount: '-', // 自由载体投用楼宇数
        ownAssetVacancyArea: '-', // 自由载体空置面积
        ownAssetRentRate: '-', // 自由载体出租率
        ownAssetProjectArea: '-', // 自由载体总建筑面积
        ownAssetCanRentArea: '-', // 自由载体总可租面积
        notNneselfProjectCount: '-', // 社会性载体投用楼宇数
        notNneselfVacancyArea: '-', // 社会性载体空置面积
        notNneselfRentRate: '-', // 社会性载体出租率
        notNneselfProjectArea: '-', // 社会性载体总建筑面积
        notNneselfCanRentArea: '-' // 社会性载体总可租面积
      },
      // 楼宇载体 -> 地上地下载体分布
      BuildCarrierCarrierDistribute: [
        {
          name: '地上',
          value: '-',
          per: '-'
        },
        {
          name: '地下',
          value: '-',
          per: '-'
        }
      ],
      // 楼宇载体 -> 载体租赁状态分布
      BuildCarrierStatusDistribute: [
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
        }
      ],
      // 产业图谱 -> 总体数据
      IndustryGraphAggregate: [
        {
          icon: '/static/child2Img/Overview/IndustryGraph/产业总数.png',
          name: '产业总数',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/二级产业总数.png',
          name: '二级产业总数',
          num: '-',
          unit: '个'
        }
      ],
      // 产业图谱 -> 二级产业数
      IndustryGraphSecondLevel: [
        {
          icon: '/static/child2Img/Overview/IndustryGraph/智能网联汽车.png',
          name: '智能网联汽车',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/先进材料.png',
          name: '先进材料',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/工业互联网.png',
          name: '工业互联网',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/能源互联网.png',
          name: '能源互联网',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/生物医药.png',
          name: '生物医药',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/航空航天.png',
          name: '航空航天',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/信创.png',
          name: '信创',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/现代商贸服贸.png',
          name: '现代商贸服贸',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/数字金融.png',
          name: '数字金融',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/数字文化创意.png',
          name: '数字文化创意',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/建筑业.png',
          name: '建筑业',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/IndustryGraph/其他.png',
          name: '其他',
          num: '-',
          unit: '个'
        }
      ],
      // 产业图谱 -> 产值税收
      IndustryGraphOutputTax: [
        {
          name: '智能网联汽车',
          value1: '-',
          value2: '-'
        },
        {
          name: '先进材料',
          value1: '-',
          value2: '-'
        },
        {
          name: '工业互联网',
          value1: '-',
          value2: '-'
        },
        {
          name: '能源互联网',
          value1: '-',
          value2: '-'
        },
        {
          name: '生物医药',
          value1: '-',
          value2: '-'
        },
        {
          name: '航空航天',
          value1: '-',
          value2: '-'
        },
        {
          name: '信创',
          value1: '-',
          value2: '-'
        },
        {
          name: '现代商贸服贸',
          value1: '-',
          value2: '-'
        },
        {
          name: '数字金融',
          value1: '-',
          value2: '-'
        },
        {
          name: '数字文化创意',
          value1: '-',
          value2: '-'
        },
        {
          name: '建筑业',
          value1: '-',
          value2: '-'
        },
        {
          name: '其他',
          value1: '-',
          value2: '-'
        }
      ],
      // 产业图谱 -> 企业总数
      IndustryGraphEnterprises: [
        {
          name: '智能网联汽车',
          value: '345'
        },
        {
          name: '先进材料',
          value: '345'
        },
        {
          name: '工业互联网',
          value: '245'
        },
        {
          name: '能源互联网',
          value: '265'
        },
        {
          name: '生物医药',
          value: '205'
        },
        {
          name: '航空航天',
          value: '205'
        },
        {
          name: '信创',
          value: '205'
        }
      ],
      // 招商引资 -> 总体数据
      AttractInvestAggregate: [
        {
          icon: '/static/child2Img/Overview/AttractInvest/入驻企业总数.png',
          name: '入驻企业总数',
          num: '-',
          unit: '家'
        },
        {
          icon: '/static/child2Img/Overview/AttractInvest/本年新注册企业数.png',
          name: '本年新注册企业数',
          num: '-',
          unit: '家'
        }
      ],
      // 招商引资 -> 企业数量走势
      AttractInvestTrend: {
        xAxisData: ['2021', '2022', '2023'],
        seriesData1: [0, 0, 0],
        seriesData2: [0, 0, 0]
      },
      // 招商引资 -> 总部企业
      AttractInvestHeadOffice: [
        {
          name: '市级以上总部企业',
          num: '-',
          unit: '家'
        },
        {
          name: '区级总部企业',
          num: '-',
          unit: '家'
        }
      ],
      AttractInvestHeadOffice2: [
        {
          name: '亿元产值企业',
          num: '-',
          unit: '家'
        },
        {
          name: '千万元税收企业',
          num: '-',
          unit: '家'
        }
      ],
      // 招商引资 -> 总部企业
      AttractInvestHeadOfficeList: [
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        },
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        },
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        },
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        },
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        },
        {
          name: '企业名称企业名称',
          type: '市级以上总部企业'
        }
      ],
      // 招商引资 -> 潜力企业
      AttractInvestPotential: [
        {
          name: '潜力企业总数',
          value: '13'
        },
        {
          name: '独角兽企业',
          value: '13'
        },
        {
          name: '专精特新企业',
          value: '1'
        },
        {
          name: '上市企业',
          value: '1'
        }
      ],
      AttractInvestPotentialList: [
        {
          name: '企业名称企业名称',
          type: '独角兽企业'
        },
        {
          name: '企业名称企业名称',
          type: '上市企业'
        },
        {
          name: '企业名称企业名称',
          type: '上市企业'
        },
        {
          name: '企业名称企业名称',
          type: '专精特新企业'
        },
        {
          name: '企业名称企业名称',
          type: '独角兽企业'
        },
        {
          name: '企业名称企业名称',
          type: '独角兽企业'
        }
      ],
      // 产值情况 -> 总体数据
      OutputSituateAggregate: [
        {
          icon: '/static/child2Img/Overview/OutputSituate/产值总额.png',
          name: '产值总额',
          num: '-',
          unit: '万元'
        },
        {
          icon: '/static/child2Img/Overview/OutputSituate/去年同期增长.png',
          name: '去年同期增长',
          num: '-',
          unit: '%'
        },
        {
          icon: '/static/child2Img/Overview/OutputSituate/单位面积平均产值.png',
          name: '单位面积平均产值',
          num: '-',
          unit: '万/㎡'
        }
      ],
      // 产值情况 -> 当年单位面积产值TOP10
      OutputSituateTOP10: [
        {
          name: '高融大厦',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '启迪（紫光大厦）',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '天成信息大厦',
          num: '-',
          per: '-',
          status: 0
        },
        {
          name: '文旅大厦',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '文旅大厦',
          num: '-',
          per: '-',
          status: 1
        }
      ],
      // 总部企业总产值 and 总部企业总税收
      TotalOutputTax: [
        {
          icon: '/static/child2Img/Overview/OutputSituate/总部企业总产值.png',
          name: '总部企业总产值',
          num: '-',
          unit: '亿',
          per: '-'
        },
        {
          icon: '/static/child2Img/Overview/TaxSituatex/总部企业总税收.png',
          name: '总部企业总税收',
          num: '-',
          unit: '亿',
          per: '-'
        }
      ],
      // 税收情况 -> 总体数据
      TaxSituatexAggregate: [
        {
          name: '税收总额',
          num: '-',
          unit: '万元'
        },
        {
          name: '去年同期增长',
          num: '-',
          unit: '%'
        }
      ],
      TaxSituatexAverageValue: '-',
      TaxSituatexAggregate2: [
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
      // 税收情况 -> 总体数据
      TaxSituatexQuarterTax: {
        xAxisData: ['一季度', '二季度', '三季度', '四季度'],
        seriesData1: [0, 0, 0, 0],
        seriesData2: [0, 0, 0, 0]
      },
      // 产值情况 -> 当年单位面积产值TOP10
      TaxSituatexTOP10: [
        {
          name: '高融大厦',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '启迪（紫光大厦）',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '天成信息大厦',
          num: '-',
          per: '-',
          status: 0
        },
        {
          name: '文旅大厦',
          num: '-',
          per: '-',
          status: 1
        },
        {
          name: '文旅大厦',
          num: '-',
          per: '-',
          status: 1
        }
      ],
      // 楼宇运维 -> 物业收费
      BuildOperateProperty: [
        {
          name: '物业费均价',
          num: '-',
          unit: '㎡'
        },
        {
          name: '水费均价',
          num: '-',
          unit: '元/吨'
        },
        {
          name: '电费均价',
          num: '-',
          unit: '元/度'
        },
        {
          name: '车位总数',
          num: '-',
          unit: '个'
        },
        {
          name: '地上车位数',
          num: '-',
          unit: '个'
        },
        {
          name: '地下车位数',
          num: '-',
          unit: '个'
        }
      ],
      // 楼宇运维 -> 能耗统计
      BuildOperateEnergy: [
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
          name: '本月累计用电',
          num: '-',
          unit: '度'
        },
        {
          name: '单位面积平均用电',
          num: '-',
          unit: '度/㎡/月'
        }
      ],
      // 左半部分右侧指标 -> 经营情况数据
      BusinessSituate: [
        {
          icon: '/static/child2Img/Overview/BusinessSituate/投用楼宇数量.png',
          name: '投用楼宇数量',
          num: '-',
          unit: '座'
        },
        {
          icon: '/static/child2Img/Overview/BusinessSituate/楼宇入驻企业.png',
          name: '楼宇入驻企业',
          num: '-',
          unit: '家'
        },
        {
          icon: '/static/child2Img/Overview/BusinessSituate/产业总数.png',
          name: '产业总数',
          num: '-',
          unit: '个'
        },
        {
          icon: '/static/child2Img/Overview/BusinessSituate/总产值.png',
          name: '总产值',
          num: '-',
          unit: '亿'
        },
        {
          icon: '/static/child2Img/Overview/BusinessSituate/当年总税收.png',
          name: '当年总税收',
          num: '-',
          unit: '亿'
        },
        {
          icon: '/static/child2Img/Overview/BusinessSituate/总补贴.png',
          name: '总补贴',
          num: '-',
          unit: '亿'
        }
      ]
    }
  },
  actions: {
    getBackInterface(bol) {
      if (bol) {
        this.getProjectTypeReport() // 楼宇载体 -> 总体数据/载体分类统计/地上地下载体分布/载体租赁状态分布
        this.getHighQualityBuildings() // 优质楼宇 -> 总体数据/优质楼宇列表
        this.getIndustryReport() // 产业图谱 -> 总体数据/二级产业数
        this.getindustryManageDevelopReport() // 产业图谱 -> 产值税收
        this.getIndustryInClientDistributionReport() // 产业图谱 -> 企业总数
        this.getProjectManageReport() // 左半部分右侧指标 -> 经营情况数据
        this.getInviteInvestmentReport() // 获取招商引资数据
        this.getPorjectIncomeReport() // 产值情况
        this.getTaxAmountReport() // 税收情况
        this.getProjectOperationReport() // 楼宇运维
      }
    },
    // 楼宇载体 -> 总体数据/载体分类统计/地上地下载体分布/载体租赁状态分布
    getProjectTypeReport() {
      request({
        url: '/getProjectTypeReport',
        isParams: true,
        method: 'get',
        data: {
          year: 2022
        }
      })
        .then(({ data }) => {
          // console.log('data', data)
          if (!isEmpty(data)) {
            // 楼宇载体 -> 载体分类统计
            this.BuildCarrierCarrierClass = data
            const {
              ownAssetProjectCount, // 自由载体投用楼宇数
              ownAssetVacancyArea, // 自由载体空置面积
              ownAssetRentRate, // 自由载体出租率
              ownAssetProjectArea, // 自由载体总建筑面积
              ownAssetCanRentArea, // 自由载体总可租面积
              ownAssetReserveArea, // 自有载体预定面积
              ownAssetAbovegroundArea, // 自有载体地上面积
              ownAssetUndergroundArea, // 自有载体地下面积
              notNneselfProjectCount, // 社会性载体投用楼宇数
              notNneselfVacancyArea, // 社会性载体空置面积
              notNneselfRentRate, // 社会性载体出租率
              notNneselfProjectArea, // 社会性载体总建筑面积
              notNneselfCanRentArea, // 社会性载体总可租面积
              notNneselfReserveArea, // 社会性载体预定面积
              notNneselfAbovegroundArea, // 社会性载体地上面积
              notNneselfUndergroundArea // 社会性载体地下面积
            } = data
            // 楼宇载体 -> 总体数据
            this.BuildCarrierAggregate = [
              {
                icon: '/static/child2Img/Overview/BuildCarrier/投用楼宇数.png',
                name: '投用楼宇数',
                num: ownAssetProjectCount + notNneselfProjectCount,
                unit: '座'
              },
              {
                icon: '/static/child2Img/Overview/BuildCarrier/总建筑面积.png',
                name: '总建筑面积',
                num: ownAssetProjectArea + notNneselfProjectArea,
                unit: '㎡'
              },
              {
                icon: '/static/child2Img/Overview/BuildCarrier/总可租面积.png',
                name: '总可租面积',
                num: ownAssetCanRentArea + notNneselfCanRentArea,
                unit: '㎡'
              },
              {
                icon: '/static/child2Img/Overview/BuildCarrier/总空置面积.png',
                name: '总空置面积',
                num: ownAssetVacancyArea + notNneselfVacancyArea,
                unit: '㎡'
              }
            ]
            // 楼宇载体 -> 总体数据-总出租率
            this.BuildCarrierAggregatePer = (ownAssetRentRate + notNneselfRentRate) / 2
            // 楼宇载体 -> 地上地下载体分布
            let AbovegroundArea = ownAssetAbovegroundArea + notNneselfAbovegroundArea
            let UndergroundArea = ownAssetUndergroundArea + notNneselfUndergroundArea
            let DistributeTotal = AbovegroundArea + UndergroundArea
            let AbovegroundAreaPer = 0
            let UndergroundAreaPer = 0
            if (DistributeTotal !== 0) {
              AbovegroundAreaPer = (AbovegroundAreaPer / DistributeTotal) * 100
              UndergroundAreaPer = (UndergroundAreaPer / DistributeTotal) * 100
            }
            this.BuildCarrierCarrierDistribute = [
              {
                name: '地上',
                value: AbovegroundArea,
                per: AbovegroundAreaPer
              },
              {
                name: '地下',
                value: UndergroundArea,
                per: UndergroundAreaPer
              }
            ]
            // 楼宇载体 -> 载体租赁状态分布
            let VacancyArea = ownAssetVacancyArea + notNneselfVacancyArea
            let CanRentArea = ownAssetCanRentArea + notNneselfCanRentArea
            let ReserveArea = ownAssetReserveArea + notNneselfReserveArea
            let StatusTotal = VacancyArea + CanRentArea + ReserveArea
            let VacancyAreaPer = 0
            let CanRentAreaPer = 0
            let ReserveAreaPer = 0
            if (StatusTotal !== 0) {
              VacancyAreaPer = (VacancyAreaPer / StatusTotal) * 100
              CanRentAreaPer = (CanRentAreaPer / StatusTotal) * 100
              ReserveAreaPer = (ReserveAreaPer / StatusTotal) * 100
            }
            this.BuildCarrierStatusDistribute = [
              {
                name: '空置',
                value: VacancyArea,
                per: VacancyAreaPer
              },
              {
                name: '租赁',
                value: CanRentArea,
                per: CanRentAreaPer
              },
              {
                name: '预定',
                value: ReserveArea,
                per: ReserveAreaPer
              }
            ]
            return true
          }
        })
        .catch((e) => {
          console.log('getProjectTypeReport', e)
          return false
        })
    },
    // 优质楼宇 -> 总体数据/优质楼宇列表
    getHighQualityBuildings() {
      const manageOperateStore = useManageOperateStore()
      request({
        url: '/getHighQualityBuildings',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getHighQualityBuildings', data)
          if (!isEmpty(data)) {
            const { star, goldCount, characteristicCount, billions, tenMillion, buildingList } = data
            this.QualityBuildAggregate = [
              {
                icon: '/static/child2Img/Overview/QualityBuild/苏州市金牌楼宇.png',
                name: '苏州市金牌楼宇',
                num: goldCount,
                unit: '座'
              },
              {
                icon: '/static/child2Img/Overview/QualityBuild/苏州市特色楼宇.png',
                name: '苏州市特色楼宇',
                num: characteristicCount,
                unit: '座'
              },
              {
                icon: '/static/child2Img/Overview/QualityBuild/亿元税收楼宇.png',
                name: '亿元税收楼宇',
                num: billions,
                unit: '座'
              },
              {
                icon: '/static/child2Img/Overview/QualityBuild/千万元税收楼宇.png',
                name: '千万元税收楼宇',
                num: tenMillion,
                unit: '座'
              }
            ]
            manageOperateStore.QualityBuildAggregate = this.QualityBuildAggregate
            if (!isEmpty(star)) {
              let obj = {
                五星: 0,
                四星: 0,
                三星: 0
              }
              star.forEach((item) => {
                const { buildingstarLevelName, count } = item
                obj[buildingstarLevelName] = count
              })
              this.QualityBuildAggregate2 = [
                {
                  value: obj.五星,
                  name: '五星',
                  itemStyle: {
                    color: 'rgba(255,193,0,.6)'
                  }
                },
                {
                  value: obj.四星,
                  name: '四星',
                  itemStyle: {
                    color: 'rgba(97,221,170,.6)'
                  }
                },
                {
                  value: obj.三星,
                  name: '三星',
                  itemStyle: {
                    color: 'rgba(30,127,255,.6)'
                  }
                }
              ]
              console.log(star)
            }
            // 优质楼宇 -> 优质楼宇列表
            if (!isEmpty(buildingList)) {
              this.QualityBuildList = buildingList.map((item) => {
                const { buildingNo: carrier, remark: reason } = item
                return {
                  carrier,
                  reason
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getHighQualityBuildings', e)
          return false
        })
    },
    // 产业图谱 -> 总体数据/二级产业数
    getIndustryReport() {
      request({
        url: '/getIndustryReport',
        isParams: true,
        method: 'get',
        data: {
          year: 2022
        }
      })
        .then(({ data }) => {
          // console.log('getIndustryReport', data)
          if (!isEmpty(data)) {
            let firstTotal = data.length
            let secondTotal = 0
            // 产业图谱 -> 二级产业数
            this.IndustryGraphSecondLevel = data.map((item) => {
              const { Name: name, childNum: num } = item
              secondTotal = secondTotal + num
              return {
                ...item,
                icon: `static/child2Img/Overview/IndustryGraph/${name}.png`,
                name,
                num,
                unit: '个'
              }
            })
            // 产业图谱 -> 总体数据
            this.IndustryGraphAggregate = [
              {
                icon: '/static/child2Img/Overview/IndustryGraph/产业总数.png',
                name: '产业总数',
                num: firstTotal,
                unit: '个'
              },
              {
                icon: '/static/child2Img/Overview/IndustryGraph/二级产业总数.png',
                name: '二级产业总数',
                num: secondTotal,
                unit: '个'
              }
            ]
            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryReport', e)
          return false
        })
    },
    // 产业图谱 -> 产值税收
    getindustryManageDevelopReport() {
      request({
        url: '/getindustryManageDevelopReport',
        isParams: true,
        method: 'get',
        data: {
          year: 2022
        }
      })
        .then(({ data }) => {
          // console.log('getindustryManageDevelopReport', data)
          if (!isEmpty(data)) {
            this.IndustryGraphOutputTax = data.map((item) => {
              const { income: value1, taxAmount: value2 } = item
              return {
                ...item,
                value1: Number(value1.toFixed(2)),
                value2: Number(value2.toFixed(2))
              }
            })
            return true
          }
        })
        .catch((e) => {
          console.log('getindustryManageDevelopReport', e)
          return false
        })
    },
    // 产业图谱 -> 企业总数
    getIndustryInClientDistributionReport() {
      request({
        url: '/getIndustryInClientDistributionReport',
        isParams: true,
        method: 'get',
        data: {
          year: 2022
        }
      })
        .then(({ data }) => {
          // console.log('getIndustryInClientDistributionReport', data)
          if (!isEmpty(data)) {
            this.IndustryGraphEnterprises = data.map((item) => {
              const { clientCount: value } = item
              return {
                ...item,
                value
              }
            })
            return true
          }
        })
        .catch((e) => {
          console.log('getIndustryInClientDistributionReport', e)
          return false
        })
    },
    // 左半部分右侧指标 -> 经营情况数据
    getProjectManageReport() {
      request({
        url: '/getProjectManageReport',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getProjectManageReport', data)
          if (!isEmpty(data)) {
            const { buildingCount, clientCount, industryCount, incomeAmount, taxAmount, subsidyAmount } = data
            this.BusinessSituate = [
              {
                icon: '/static/child2Img/Overview/BusinessSituate/投用楼宇数量.png',
                name: '投用楼宇数量',
                num: buildingCount,
                unit: '座'
              },
              {
                icon: '/static/child2Img/Overview/BusinessSituate/楼宇入驻企业.png',
                name: '楼宇入驻企业',
                num: clientCount,
                unit: '家'
              },
              {
                icon: '/static/child2Img/Overview/BusinessSituate/产业总数.png',
                name: '产业总数',
                num: industryCount,
                unit: '个'
              },
              {
                icon: '/static/child2Img/Overview/BusinessSituate/总产值.png',
                name: '总产值',
                num: Number((incomeAmount / 1000).toFixed(2)),
                unit: '亿'
              },
              {
                icon: '/static/child2Img/Overview/BusinessSituate/当年总税收.png',
                name: '当年总税收',
                num: Number((taxAmount / 1000).toFixed(2)),
                unit: '亿'
              },
              {
                icon: '/static/child2Img/Overview/BusinessSituate/总补贴.png',
                name: '总补贴',
                num: Number((subsidyAmount / 1000).toFixed(2)),
                unit: '亿'
              }
            ]
            return true
          }
        })
        .catch((e) => {
          console.log('getProjectManageReport', e)
          return false
        })
    },
    // 获取招商引资数据
    getInviteInvestmentReport() {
      const leaseInvestStore = useLeaseInvestStore()
      request({
        url: '/getInviteInvestmentReport',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getInviteInvestmentReport', data)
          if (!isEmpty(data)) {
            const {
              ownClientNum,
              newClientNum,
              clientExistReport,
              cityClientLevelNum,
              headDistrictLevelClientNum,
              clientTagReport,
              tagsClinetList,
              headClinetList,
              headTaxAmount,
              headIncome,
              oneHundredMillion,
              tenMillion
            } = data
            // 招商引资 -> 总体数据
            this.AttractInvestAggregate = [
              {
                icon: '/static/child2Img/Overview/AttractInvest/入驻企业总数.png',
                name: '入驻企业总数',
                num: ownClientNum,
                unit: '家'
              },
              {
                icon: '/static/child2Img/Overview/AttractInvest/本年新注册企业数.png',
                name: '本年新注册企业数',
                num: newClientNum,
                unit: '家'
              }
            ]
            // 招商引资 -> 企业数量走势
            if (!isEmpty(clientExistReport)) {
              let xAxisData = clientExistReport.map((item) => item.year)
              let seriesData1 = clientExistReport.map((item) => item.existClientNum)
              let seriesData2 = clientExistReport.map((item) => item.newClientNum)
              this.AttractInvestTrend = {
                xAxisData,
                seriesData1,
                seriesData2
              }
              leaseInvestStore.EnterpriseSettleTrend = this.AttractInvestTrend
            }
            // 招商引资 -> 总部企业
            this.AttractInvestHeadOffice = [
              {
                name: '市级以上总部企业',
                num: cityClientLevelNum,
                unit: '家'
              },
              {
                name: '区级总部企业',
                num: headDistrictLevelClientNum,
                unit: '家'
              }
            ]
            this.AttractInvestHeadOffice2 = [
              {
                name: '亿元产值企业',
                num: oneHundredMillion,
                unit: '家'
              },
              {
                name: '千万元税收企业',
                num: tenMillion,
                unit: '家'
              }
            ]
            if (!isEmpty(headClinetList)) {
              this.AttractInvestHeadOfficeList = headClinetList.map((item) => {
                const { clientName, tags } = item
                return {
                  clientName,
                  tags
                }
              })
            }
            // 招商引资 -> 潜力企业
            if (!isEmpty(clientTagReport)) {
              this.AttractInvestPotential = clientTagReport.map((item) => {
                const { count: value, dict_label: name } = item
                return {
                  name,
                  value
                }
              })
            }
            if (!isEmpty(tagsClinetList)) {
              this.AttractInvestPotentialList = tagsClinetList.map((item) => {
                const { clientName, tags } = item
                return {
                  clientName,
                  tags
                }
              })
            }
            if (!isEmpty(headTaxAmount) && !isEmpty(headIncome)) {
              const { headTax, total: TaxTotal } = headTaxAmount[0]
              const { headIncome: headIn, total: InTotal } = headIncome[0]
              let TaxPer = '-'
              let InPer = '-'
              if (headTax && TaxTotal) {
                TaxPer = Number((headTax / TaxTotal).toFixed(2))
              }
              if (headIn && InTotal) {
                InPer = Number((headIn / InTotal).toFixed(2))
              }
              this.TotalOutputTax = [
                {
                  icon: '/static/child2Img/Overview/OutputSituate/总部企业总产值.png',
                  name: '总部企业总产值',
                  num: headIn || '-',
                  unit: '亿',
                  per: InPer
                },
                {
                  icon: '/static/child2Img/Overview/TaxSituatex/总部企业总税收.png',
                  name: '总部企业总税收',
                  num: headTax || '-',
                  unit: '亿',
                  per: TaxPer
                }
              ]
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getInviteInvestmentReport', e)
          return false
        })
    },
    // 产值情况
    getPorjectIncomeReport() {
      request({
        url: '/getPorjectIncomeReport',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getPorjectIncomeReport', data)
          if (!isEmpty(data)) {
            const { averageValue, allIncome, lastYearAllIncome, assetList } = data
            let per = '-'
            if (allIncome && lastYearAllIncome) {
              if (allIncome > lastYearAllIncome) {
                per = Number((allIncome / lastYearAllIncome).toFixed(2))
              } else if (allIncome < lastYearAllIncome) {
                per = -Number((lastYearAllIncome / allIncome).toFixed(2))
              } else if (allIncome == lastYearAllIncome) {
                per = 1
              }
            }
            this.OutputSituateAggregate = [
              {
                icon: '/static/child2Img/Overview/OutputSituate/产值总额.png',
                name: '产值总额',
                num: allIncome || '-',
                unit: '万元'
              },
              {
                icon: '/static/child2Img/Overview/OutputSituate/去年同期增长.png',
                name: '去年同期增长',
                num: per || '-',
                unit: '%'
              },
              {
                icon: '/static/child2Img/Overview/OutputSituate/单位面积平均产值.png',
                name: '单位面积平均产值',
                num: averageValue || '-',
                unit: '万/㎡'
              }
            ]
            if (!isEmpty(assetList)) {
              this.OutputSituateTOP10 = assetList.map((item) => {
                const { thisYear, lastYear, unitIncome, projectName: name } = item
                let status = 1
                let per = '-'
                if (thisYear && lastYear) {
                  if (thisYear > lastYear) {
                    per = Number((thisYear / thisYear).toFixed(2))
                  } else if (thisYear < lastYear) {
                    per = -Number((lastYear / thisYear).toFixed(2))
                    status = 0
                  } else if (thisYear == lastYear) {
                    per = 1
                  }
                }
                return {
                  ...item,
                  name,
                  num: unitIncome || '-',
                  per,
                  status
                }
              })
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getPorjectIncomeReport', e)
          return false
        })
    },
    // 税收情况
    getTaxAmountReport() {
      request({
        url: '/getTaxAmountReport',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getTaxAmountReport', data)
          if (!isEmpty(data)) {
            const { averageValue, allTaxAmount, lastYearAllTaxAmount, assetList, quarterReport } = data
            this.TaxSituatexAverageValue = averageValue || '-'
            let per = '-'
            if (allTaxAmount && lastYearAllTaxAmount) {
              if (allTaxAmount > lastYearAllTaxAmount) {
                per = Number((allTaxAmount / lastYearAllTaxAmount).toFixed(2))
              } else if (allTaxAmount < lastYearAllTaxAmount) {
                per = -Number((lastYearAllTaxAmount / allTaxAmount).toFixed(2))
              } else if (allTaxAmount == lastYearAllTaxAmount) {
                per = 1
              }
            }
            this.TaxSituatexAggregate = [
              {
                name: '税收总额',
                num: allTaxAmount || '-',
                unit: '万元'
              },
              {
                name: '去年同期增长',
                num: per,
                unit: '%'
              }
            ]
            if (!isEmpty(assetList)) {
              this.TaxSituatexTOP10 = assetList.map((item) => {
                const { thisYear, lastYear, unitTaxAmount, projectName: name } = item
                let status = 1
                let per = '-'
                if (thisYear && lastYear) {
                  if (thisYear > lastYear) {
                    per = Number((thisYear / thisYear).toFixed(2))
                  } else if (thisYear < lastYear) {
                    per = -Number((lastYear / thisYear).toFixed(2))
                    status = 0
                  } else if (thisYear == lastYear) {
                    per = 1
                  }
                }
                return {
                  ...item,
                  name,
                  num: unitTaxAmount || '-',
                  per,
                  status
                }
              })
            }
            if (!isEmpty(quarterReport)) {
              let obj = {
                2021: [0, 0, 0, 0],
                2022: [0, 0, 0, 0]
              }
              quarterReport.forEach((item) => {
                const { quarter, taxAmount, year } = item
                obj[year][quarter - 1] = taxAmount
              })
              this.TaxSituatexQuarterTax = {
                xAxisData: ['一季度', '二季度', '三季度', '四季度'],
                seriesData1: obj[2021],
                seriesData2: obj[2022]
              }
            }
            return true
          }
        })
        .catch((e) => {
          console.log('getTaxAmountReport', e)
          return false
        })
    },
    // 楼宇运维
    getProjectOperationReport() {
      request({
        url: '/getProjectOperationReport',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('getProjectOperationReport', data)
          if (!isEmpty(data)) {
            const {
              propertyPrice,
              waterAveragePrice,
              electricityAveragePrice,
              allParkingspace,
              parkingspace,
              parkingspaceUnderground,
              sumWater,
              unitWater,
              sumElectricity,
              unitElectricity
            } = data
            this.BuildOperateProperty = [
              {
                name: '物业费均价',
                num: propertyPrice,
                unit: '㎡'
              },
              {
                name: '水费均价',
                num: waterAveragePrice,
                unit: '元/吨'
              },
              {
                name: '电费均价',
                num: electricityAveragePrice,
                unit: '元/度'
              },
              {
                name: '车位总数',
                num: allParkingspace,
                unit: '个'
              },
              {
                name: '地上车位数',
                num: parkingspace,
                unit: '个'
              },
              {
                name: '地下车位数',
                num: parkingspaceUnderground,
                unit: '个'
              }
            ]
            this.BuildOperateEnergy = [
              {
                name: '本月累计用水',
                num: sumWater,
                unit: '吨'
              },
              {
                name: '单位面积平均用水',
                num: unitWater,
                unit: '吨/㎡/月'
              },
              {
                name: '本月累计用电',
                num: sumElectricity,
                unit: '度'
              },
              {
                name: '单位面积平均用电',
                num: unitElectricity,
                unit: '度/㎡/月'
              }
            ]
            return true
          }
        })
        .catch((e) => {
          console.log('getProjectOperationReport', e)
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
export default useOverviewStore
