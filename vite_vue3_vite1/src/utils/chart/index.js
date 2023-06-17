/*
 * @Description: 图表工具
 * @Author: scc
 * @Date: 2022-10-10 15:25:21
 * @LastEditTime: 2022-10-18 16:35:00
 * @LastEditors: scc
 * @FilePath: \building-large_screen\src\utils\chart\index.js
 */
import bezierAnimation from './bezierAnimation'
import { getBezierControlPoint, getThreeBezierPoint, getOneBezierPoint } from './bezier'
import { getBezierCurveLength } from './bezierCurveToPolyline'

export const setChartFlowLine = (chart, anim = 'ease') => {
  let chartEl = chart._dom.getElementsByTagName('div')[0]
  // let chartCsEl = chart._dom.getElementsByTagName('div')[0].childNodes[0]
  let chartOption = chart.getOption()
  for (let index = 0; index < chartOption.series.length; index++) {
    let flowLineEl = document.createElement('canvas')

    flowLineEl.width = chartEl.clientWidth
    flowLineEl.height = chartEl.clientHeight

    flowLineEl.style.zIndex = 9
    flowLineEl.style.position = 'absolute'
    flowLineEl.style.top = 0
    flowLineEl.style.left = 0
    flowLineEl.id = 'flowLineCanvasId'
    chartEl.appendChild(flowLineEl)

    let ctx = flowLineEl.getContext('2d')

    let xAxisData = chartOption.xAxis[0].data
    let seriesData = chartOption.series[index]
    createFlyLine(ctx, chart, xAxisData, seriesData, index, anim)
  }
}

const createFlyLine = (ctx, chart, xAxisData, seriesData, seriesIndex, anim) => {
  let points = []
  for (let index = 0; index < xAxisData.length; index++) {
    const item = xAxisData[index]
    let point = chart.convertToPixel(
      { xAxisIndex: seriesData.xAxisIndex || 0, yAxisIndex: seriesData.yAxisIndex || 0 },
      [item, seriesData.data[index]]
    )
    points = points.concat(point)
  }
  let bezierPoints = []
  let bezierCurveLengths = []
  let lineLength = 0

  if (seriesData.step == 'middle') {
    let pointList = []
    for (let index = 0; index < points.length / 2 - 1; index++) {
      pointList.push(points[index * 2])
      pointList.push(points[index * 2 + 1])

      pointList.push(points[index * 2] + (points[index * 2 + 2] - points[index * 2]) / 2) //x
      pointList.push(points[index * 2 + 1]) // y

      pointList.push(points[index * 2] + (points[index * 2 + 2] - points[index * 2]) / 2) //x
      pointList.push(points[index * 2 + 3]) // y

      pointList.push(points[index * 2 + 2])
      pointList.push(points[index * 2 + 3]) // y
    }
    for (let index = 0; index < pointList.length / 2 - 1; index++) {
      let length = Math.sqrt(
        Math.pow(pointList[index * 2 + 2] - pointList[index * 2], 2) +
          Math.pow(pointList[index * 2 + 3] - pointList[index * 2 + 1], 2)
      )
      lineLength += length
      bezierCurveLengths.push(length)
    }
    for (let index = 0; index < pointList.length / 2 - 1; index++) {
      let pre = bezierCurveLengths[index] / lineLength
      let bezierPoint = getOneBezierPoint(
        Number((140 * pre).toFixed(0)),
        [pointList[index * 2], pointList[index * 2 + 1]],
        [pointList[index * 2 + 2], pointList[index * 2 + 3]]
      )
      bezierPoints = bezierPoints.concat(bezierPoint)
    }
  } else {
    if (seriesData.smooth) {
      // 贝塞尔曲线控制点
      let cPoint = getBezierControlPoint(points, 0, xAxisData.length, xAxisData.length, 1, 0.5)

      cPoint.forEach((item, index) => {
        let length = getBezierCurveLength([
          [points[index * 2], points[index * 2 + 1]],
          [item[0], item[1], [points[index * 2 + 2], points[index * 2 + 3]]]
        ])
        lineLength += length
        bezierCurveLengths.push(length)
      })
      cPoint.forEach((item, index) => {
        let pre = bezierCurveLengths[index] / lineLength
        let bezierPoint = getThreeBezierPoint(
          Number((140 * pre).toFixed(0)),
          [points[index * 2], points[index * 2 + 1]],
          item[0],
          item[1],
          [points[index * 2 + 2], points[index * 2 + 3]]
        )
        bezierPoints = bezierPoints.concat(bezierPoint)
      })
    } else {
      for (let index = 0; index < points.length / 2 - 1; index++) {
        let length = Math.sqrt(
          Math.pow(points[index * 2 + 2] - points[index * 2], 2) +
            Math.pow(points[index * 2 + 3] - points[index * 2 + 1], 2)
        )
        lineLength += length
        bezierCurveLengths.push(length)
      }
      for (let index = 0; index < points.length / 2 - 1; index++) {
        let pre = bezierCurveLengths[index] / lineLength
        let bezierPoint = getOneBezierPoint(
          Number((140 * pre).toFixed(0)),
          [points[index * 2], points[index * 2 + 1]],
          [points[index * 2 + 2], points[index * 2 + 3]]
        )
        bezierPoints = bezierPoints.concat(bezierPoint)
      }
    }
  }

  // 一次动画执行时间
  let countTime = 3
  let t = 0 // 0~1
  let falg = true
  // 流线长度
  let lineWidth = 40

  draw()
  function draw() {
    let animList = {
      ease: new bezierAnimation(0.25, 0.1, 0.25, 1),
      easeIn: new bezierAnimation(0.42, 0, 1, 1),
      easeOut: new bezierAnimation(0, 0, 0.58, 1),
      easeInOut: new bezierAnimation(0.42, 0, 0.58, 1),
      line: new bezierAnimation(0, 0, 1, 1)
    }
    let c = animList[anim]
    ctx.clearRect(
      0,
      0,
      chart._dom.getElementsByTagName('div')[0].clientWidth,
      chart._dom.getElementsByTagName('div')[0].clientHeight
    )
    if (bezierPoints.length * c.solve(t) <= lineWidth && falg) {
      createCurveLine(bezierPoints.slice(0, Math.round(bezierPoints.length * c.solve(t))))
    } else {
      if (Math.round(bezierPoints.length * c.solve(t)) < bezierPoints.length) {
        createCurveLine(
          bezierPoints.slice(
            Math.round(bezierPoints.length * c.solve(t)),
            Math.round(bezierPoints.length * c.solve(t) + bezierPoints.length / lineLength + lineWidth)
          )
        )
      }
    }
    t = t + 1 / (60 * countTime)

    if (bezierPoints.length * c.solve(t) > lineWidth && falg) {
      falg = false
      t = 0
    }
    if (t >= 1) {
      t = 0
      falg = true
    }
    // 1000/60    16ms执行一次
    requestAnimationFrame(draw)
  }
  function createCurveLine(points) {
    if (points.length == 0) {
      return
    }
    const gradient = createGradient(ctx, points[0], points[points.length - 1])

    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])

    // 参数 points 是曲线上一部分连续点的集合，我们用 lineTo 把这些点连结起来，就近似的得到了曲线
    for (let i = 0; i < points.length; i++) {
      const p = points[i]
      ctx.lineTo(p[0], p[1])
    }

    ctx.moveTo(points[0][0], points[0][1])
    ctx.strokeStyle = gradient
    ctx.lineCap = 'round'
    ctx.lineWidth = 3

    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowColor = chart.getOption().color[seriesIndex]
    ctx.shadowBlur = 5

    ctx.stroke()
  }
  // 创建渐变
  function createGradient(context, p0, p1) {
    const gradient = context.createLinearGradient(p0[0], p0[1], p1[0], p1[1])

    gradient.addColorStop(0, 'rgba(255,255,255,0.3)')
    gradient.addColorStop(1, '#fff')

    return gradient
  }
}
