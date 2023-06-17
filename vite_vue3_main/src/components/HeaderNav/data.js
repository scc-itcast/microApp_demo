export const menuList = [
  {
    title: 'CIM底座',
    appName: 'appname-CIMBase',
    route: '/app-CIMBase',
    children: []
  },
  {
    title: 'vite1',
    appName: 'appname-vite1',
    route: '/app-vite1',
    children: [
      {
        title: 'home',
        route: '/app-vite1/home',
        hashName: 'home',
        isShow: true
      },
      {
        title: 'page2',
        route: '/app-vite1/page2',
        hashName: 'page2',
        isShow: true
      }
    ]
  },
  {
    title: 'BIM全域覆盖',
    appName: 'appname-BIMGlobalCoverage',
    route: '/app-BIMGlobalCoverage',
    children: []
  },
  {
    title: '智慧工地安监',
    appName: 'appname-SmartSiteSafetySupervision',
    route: '/app-SmartSiteSafetySupervision',
    children: []
  },
  {
    title: '智能建造示范',
    appName: 'appname-SmartConstructionDemonstration',
    route: '/app-SmartConstructionDemonstration',
    children: [
      {
        title: 'BIM数字一体化',
        route: '/app-SmartConstructionDemonstration/BIMDigitalIntegration',
        hashName: 'BIMDigitalIntegration',
        isShow: false
      },
      {
        title: '部品部件',
        route: '/app-SmartConstructionDemonstration/Part',
        hashName: 'Part',
        isShow: false
      },
      {
        title: '智能施工管理',
        route: '/app-SmartConstructionDemonstration/IntelligentConstructionManage',
        hashName: 'IntelligentConstructionManage',
        isShow: false
      },
      {
        title: '机器人及智能装备',
        route: '/app-SmartConstructionDemonstration/RobotsAndIntelligentEquip',
        hashName: 'RobotsAndIntelligentEquip',
        isShow: false
      },
      {
        title: '建筑产业互联网',
        route: '/app-SmartConstructionDemonstration/ConstructionIndustryInternet',
        hashName: 'ConstructionIndustryInternet',
        isShow: false
      },
      {
        title: '数字交付与运维',
        route: '/app-SmartConstructionDemonstration/DigitalDeliveryAndOperat',
        hashName: 'DigitalDeliveryAndOperat',
        isShow: false
      }
    ]
  },
  {
    title: '智能建筑管理',
    appName: 'appname-IntelligentBuildingManage',
    route: '/app-IntelligentBuildingManage',
    children: [
      {
        title: '高铁之心详情',
        route: '/app-IntelligentBuildingManage/Second',
        hashName: 'Second',
        isShow: false
      }
    ]
  },
  {
    title: '智慧楼宇经济',
    appName: 'appname-SmartBuildingEconomy',
    route: '/app-SmartBuildingEconomy',
    children: [
      {
        title: '总体概览',
        route: '/app-SmartBuildingEconomy/Overview',
        hashName: 'Overview',
        isShow: true
      },
      {
        title: '产业发展',
        route: '/app-SmartBuildingEconomy/IndustryDev',
        hashName: 'IndustryDev',
        isShow: true
      },
      {
        title: '租赁招商',
        route: '/app-SmartBuildingEconomy/LeaseInvest',
        hashName: 'LeaseInvest',
        isShow: true
      },
      {
        title: '经营运维',
        route: '/app-SmartBuildingEconomy/ManageOperate',
        hashName: 'ManageOperate',
        isShow: true
      },
      {
        title: '楼宇经济详情',
        route: '/app-SmartBuildingEconomy/Second',
        hashName: 'Second',
        isShow: false
      }
    ]
  },
  {
    title: '智能网联车辆',
    appName: 'appname-IntelligentConnectedVehicles',
    route: '/app-IntelligentConnectedVehicles',
    children: []
  },
  {
    title: '双碳先导示范',
    appName: 'appname-TwoCarbonPilotDemonstration',
    route: '/app-TwoCarbonPilotDemonstration',
    children: []
  },
  {
    title: '智慧地下管网',
    appName: 'appname-SmartUndergroundPipeNetwork',
    route: '/app-SmartUndergroundPipeNetwork',
    children: []
  }
]
export const routeNameList = menuList.map((item) => item.route)
export const hashNameList = menuList.reduce((total, cur) => {
  const arr = cur.children.map((item) => item.hashName) || []
  return (total = [...total, ...arr])
}, [])
