/*
 * @Description:
 * @Author: scc
 * @Date: 2022-08-18 09:09:35
 * @LastEditTime: 2023-02-16 08:53:48
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \zyf-group-large_screen\src\utils\index.js
 */
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
export function setFontSize(res) {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth) return
  const fontSize = 100 * (clientWidth / 3420)
  return res * fontSize
}

export const hexToRgba = (hex, opacity) => {
  let rgbaColor = ''
  let reg = /^#[\da-f]{6}$/i
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
      '0x' + hex.slice(5, 7)
    )},${opacity})`
  }
  return rgbaColor
}

// 节流
export function throttle(fn, delay) {
  var previous = 0
  return function () {
    var _this = this
    var args = arguments
    var now = new Date()
    if (now - previous > delay) {
      fn.apply(_this, args)
      previous = now
    }
  }
}

export const getUrlKey = (url) => {
  url = decodeURIComponent(url).replace('?', '').split('&')
  let urlKeyArr = {}
  url.forEach((item) => {
    if (item.substr(0, 5) == 'token') {
      urlKeyArr.token = item.substr(6, item.length - 1)
    } else {
      item.replace(/(.+)=(.+)/g, function (a, b, c) {
        urlKeyArr[b] = c
      })
    }
  })

  return urlKeyArr
}

export let bodyBackground = getUrlKey(window.location.search).bodyBackground || 'transparent'
export let openInterface = getUrlKey(window.location.search).openInterface || false
export let openUEPixel = getUrlKey(window.location.search).openUEPixel || false
export let adaptorNotebook = getUrlKey(window.location.search).adaptorNotebook || false
export let noFirstOpenUEPixel = getUrlKey(window.location.search).noFirstOpenUEPixel || false
if (bodyBackground != 'transparent') {
  bodyBackground = `#${bodyBackground}`
}
if (openInterface) {
  openInterface = true
}
if (openUEPixel) {
  openUEPixel = true
}
if (adaptorNotebook) {
  adaptorNotebook = true
}
