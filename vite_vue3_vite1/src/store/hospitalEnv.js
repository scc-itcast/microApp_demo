/*
 * @Description: 医院环境
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2022-12-06 22:18:27
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\store\smartSecurity.js
 */
import { defineStore } from 'pinia'
import moment from 'moment'
import { jsonp } from '@/utils/jsonp'
import { isEmpty } from '@/utils/is'
import request from '@/utils/axiosReq'
import { weatherNameMap, weekMap, formatWeek } from '@/utils/commonMap'
const useHospitalEnvStore = defineStore('hospitalEnv', {
  state: () => {
    return {
      deliveryArea: [
        {
          title: '送餐区环境监测',
          name: '压差',
          value: 10,
          img: '/static/child2Img/Overview/pressure.png',
          unit: 'pa'
        }
      ],
      bufferA: [
        {
          title: 'A舱环境监测',
          name: '温度',
          value: 19,
          img: '/static/child2Img/Overview/degree.png',
          unit: '℃'
        },
        {
          title: 'A舱环境监测',
          name: '湿度',
          value: 86,
          img: '/static/child2Img/Overview/humidity.png',
          unit: '%'
        },
        {
          title: 'A舱环境监测',
          name: '压差',
          value: 10,
          img: '/static/child2Img/Overview/pressure.png',
          unit: 'pa'
        }
      ],
      bufferB: [
        {
          title: 'B舱环境监测',
          name: '温度',
          value: 19,
          img: '/static/child2Img/Overview/degree.png',
          unit: '℃'
        },
        {
          title: 'B舱环境监测',
          name: '湿度',
          value: 86,
          img: '/static/child2Img/Overview/humidity.png',
          unit: '%'
        },
        {
          title: 'B舱环境监测',
          name: '压差',
          value: 25,
          img: '/static/child2Img/Overview/pressure.png',
          unit: 'pa'
        }
      ], // UEDemo区环境
      weather_icon: '/static/child2Img/weather/yun.png', // 默认天气
      observeMap: {
        url: '/static/child2Img/weather/yun.png',
        weather: '多云',
        degree: 19,
        humidity: 86,
        day_wind_direction: '东南风',
        wind_power: 3,
        pressure: 1009
      }, // 当天天气
      forecastSeven: [
        {
          date: '昨天',
          week: '11月27日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 20,
          min_degree: 16,
          day_wind_direction: '东南风'
        },
        {
          date: '今天',
          week: '11月28日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 19,
          min_degree: 14,
          day_wind_direction: '北风'
        },
        {
          date: '明天',
          week: '11月29日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 14,
          min_degree: 3,
          day_wind_direction: '北风'
        },
        {
          date: '后天',
          week: '11月30日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 4,
          min_degree: 2,
          day_wind_direction: '北风'
        },
        {
          date: '周四',
          week: '12月01日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 5,
          min_degree: 2,
          day_wind_direction: '西北风'
        },
        {
          date: '周五',
          week: '12月02日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 8,
          min_degree: 2,
          day_wind_direction: '东北风'
        },
        {
          date: '周六',
          week: '12月03日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 12,
          min_degree: 7,
          day_wind_direction: '北风'
        },
        {
          date: '周日',
          week: '12月04日',
          url: '/static/child2Img/weather/yun.png',
          day_weather: '多云',
          max_degree: 13,
          min_degree: 8,
          day_wind_direction: '东北风'
        }
      ], // 昨天加今天及未来六天
      weekEcharts: {
        // 昨天加今天及未来六天
        seriesData1: [20, 19, 14, 4, 5, 8, 12, 13],
        seriesData2: [16, 14, 3, 2, 2, 2, 7, 8],
        xAxisData: ['12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09', '12-10']
      }
    }
  },
  actions: {
    getEnvironment() {
      request({
        url: '',
        isParams: true,
        method: 'post',
        data: {
          model: 'hospital.surroundings.area',
          function_name: 'get_surroundings_area'
        }
      })
        .then(({ data }) => {
          // console.log('getEnvironment', data)
          if (!isEmpty(data)) {
            const [o0, o1, o2] = data
            if (!isEmpty(o0)) {
              const { name: title, temperature: m0, humidity: m1, differential_pressure: m2 } = o0
              this.bufferA = [
                {
                  title: 'A舱环境监测' || title,
                  name: '温度',
                  value: m0,
                  img: '/static/child2Img/Overview/degree.png',
                  unit: '℃'
                },
                {
                  title: 'A舱环境监测' || title,
                  name: '湿度',
                  value: m1,
                  img: '/static/child2Img/Overview/humidity.png',
                  unit: '%'
                },
                {
                  title: 'A舱环境监测' || title,
                  name: '压差',
                  value: Math.round(m2),
                  img: '/static/child2Img/Overview/pressure.png',
                  unit: 'pa'
                }
              ]
            }
            if (!isEmpty(o1)) {
              const { name: title, temperature: e0, humidity: e1, differential_pressure: e2 } = o1
              this.bufferB = [
                {
                  title: 'B舱环境监测' || title,
                  name: '温度',
                  value: e0,
                  img: '/static/child2Img/Overview/degree.png',
                  unit: '℃'
                },
                {
                  title: 'B舱环境监测' || title,
                  name: '湿度',
                  value: e1,
                  img: '/static/child2Img/Overview/humidity.png',
                  unit: '%'
                },
                {
                  title: 'B舱环境监测' || title,
                  name: '压差',
                  value: Math.round(e2),
                  img: '/static/child2Img/Overview/pressure.png',
                  unit: 'pa'
                }
              ]
            }
            if (!isEmpty(o2)) {
              const { name: title, differential_pressure: d2 } = o1
              this.deliveryArea = [
                {
                  title: '送餐区环境监测' || title,
                  name: '压差',
                  value: Math.round(d2),
                  img: '/static/child2Img/Overview/pressure.png',
                  unit: 'pa'
                }
              ]
            }
          }
        })
        .catch((e) => console.log('getEnvironment', e))
    },
    setEnvironmentList(data) {
      const { observe } = data
      const { degree, humidity, pressure } = observe
      let list = [
        {
          name: '温度',
          value: degree,
          img: '/static/child2Img/Overview/degree.png',
          unit: '℃'
        },
        {
          name: '湿度',
          value: humidity,
          img: '/static/child2Img/Overview/humidity.png',
          unit: '%'
        },
        {
          name: '气压',
          value: pressure,
          img: '/static/child2Img/Overview/pressure.png',
          unit: 'hPa'
        }
      ]
      this.environmentList = list
      // console.log('weatherData', data, list)
    },
    setObserveMap(data) {
      const { observe, forecast_24h } = data
      const { weather } = observe
      let name = ''
      let url = ''
      name = weatherNameMap[weather]
      url = `static/child2Img/weather/${name}.png`
      if (!name) url = this.weather_icon
      this.observeMap = { ...observe, day_wind_direction: forecast_24h[1].day_wind_direction, url }
    },
    setForecastSeven(data) {
      const { forecast_24h } = data
      let name = ''
      let url = ''
      let date = ''
      let week = ''
      let seriesData1Copy = []
      let seriesData2Copy = []
      const forecastSevenCopy = Object.values(forecast_24h).map((item, index) => {
        const { day_weather, time, max_degree, min_degree } = item
        seriesData1Copy.push(max_degree)
        seriesData2Copy.push(min_degree)
        name = weatherNameMap[day_weather]
        // console.log('name', name)
        date = moment(time).format('MM月DD日')
        week = moment(time).format('dddd')
        week = weekMap[week]
        week = formatWeek(index, week)

        url = `static/child2Img/weather/${name}.png`
        if (!name) url = this.weather_icon
        return {
          ...item,
          url,
          date,
          week
        }
      })
      this.forecastSeven = forecastSevenCopy
      this.weekEcharts.seriesData1 = seriesData1Copy
      this.weekEcharts.seriesData2 = seriesData2Copy
    },
    getWeather() {
      jsonp({
        url: 'https://wis.qq.com/weather/common',
        data: {
          source: 'pc',
          weather_type: 'observe|forecast_1h|forecast_24h|index|alarm|limit|tips|rise',
          province: '江苏',
          city: '苏州',
          county: '相城'
        },
        success: ({ data }) => {
          this.setObserveMap(data)
          // this.setEnvironmentList(data)
          this.setForecastSeven(data)
        }
      })
      jsonp({
        url: 'https://wis.qq.com/weather/common',
        data: {
          source: 'pc',
          weather_type: 'air|rise',
          province: '江苏',
          city: '苏州'
        },
        success: function ({ data }) {
          console.log('airMap', data)
        }
      })
    }
  }
})
export default useHospitalEnvStore
