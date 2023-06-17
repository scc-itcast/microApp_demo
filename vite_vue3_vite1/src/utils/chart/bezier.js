/*
 * @Description: 贝塞尔曲线相关
 * @Author: scc
 * @Date: 2022-10-10 15:27:17
 * @LastEditTime: 2022-10-18 11:38:57
 * @LastEditors: scc
 * @FilePath: \building-large_screen\src\utils\chart\bezier.js
 */
/**
 * @desc 三阶贝塞尔
 * @param {number} t 当前百分比
 * @param {Array} p1 起点坐标
 * @param {Array} p2 终点坐标
 * @param {Array} cp1 控制点1
 * @param {Array} cp2 控制点2
 */
export const threeBezier = (t, p1, cp1, cp2, p2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  const [cx1, cy1] = cp1
  const [cx2, cy2] = cp2
  let x =
    x1 * (1 - t) * (1 - t) * (1 - t) + 3 * cx1 * t * (1 - t) * (1 - t) + 3 * cx2 * t * t * (1 - t) + x2 * t * t * t
  let y =
    y1 * (1 - t) * (1 - t) * (1 - t) + 3 * cy1 * t * (1 - t) * (1 - t) + 3 * cy2 * t * t * (1 - t) + y2 * t * t * t
  return [x, y]
}
export const oneBezier = (t, p1, p2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  let x = x1 + (x2 - x1) * t
  let y = y1 + (y2 - y1) * t
  return [x, y]
}
// 获取三次贝塞尔曲线坐标点
export function getThreeBezierPoint(n, p1, cp1, cp2, p2) {
  let points = []
  for (let index = 0; index < n; index++) {
    points.push(threeBezier((1 / n) * index, p1, cp1, cp2, p2))
  }
  return points
}
// 获取一次贝塞尔曲线坐标点
export function getOneBezierPoint(n, p1, p2) {
  let points = []
  for (let index = 0; index < n; index++) {
    points.push(oneBezier((1 / n) * index, p1, p2))
  }
  return points
}

const mathMin = Math.min
const mathMax = Math.max

function isPointNull(x, y) {
  return isNaN(x) || isNaN(y)
}
// chart line贝塞尔曲线计算
export function getBezierControlPoint(
  points,
  start,
  segLen,
  allLen,
  dir,
  smooth,
  smoothMonotone = 'none',
  connectNulls
) {
  let prevX
  let prevY
  let cpx0
  let cpy0
  let cpx1
  let cpy1
  let idx = start
  let k = 0
  // 控制点
  let cPoint = []
  for (; k < segLen; k++) {
    let x = points[idx * 2]
    let y = points[idx * 2 + 1]

    if (idx >= allLen || idx < 0) {
      break
    }
    if (isPointNull(x, y)) {
      if (connectNulls) {
        idx += dir
        continue
      }
      break
    }

    if (idx === start) {
      // ctx[dir > 0 ? 'moveTo' : 'lineTo'](x, y)
      // dir > 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      cpx0 = x
      cpy0 = y
    } else {
      let dx = x - prevX
      let dy = y - prevY

      // Ignore tiny segment.
      if (dx * dx + dy * dy < 0.5) {
        idx += dir
        continue
      }

      // if (smooth > 0) {
      let nextIdx = idx + dir
      let nextX = points[nextIdx * 2]
      let nextY = points[nextIdx * 2 + 1]
      // Ignore duplicate point
      while (nextX === x && nextY === y && k < segLen) {
        k++
        nextIdx += dir
        idx += dir
        nextX = points[nextIdx * 2]
        nextY = points[nextIdx * 2 + 1]
        x = points[idx * 2]
        y = points[idx * 2 + 1]
        dx = x - prevX
        dy = y - prevY
      }

      let tmpK = k + 1
      if (connectNulls) {
        // Find next point not null
        while (isPointNull(nextX, nextY) && tmpK < segLen) {
          tmpK++
          nextIdx += dir
          nextX = points[nextIdx * 2]
          nextY = points[nextIdx * 2 + 1]
        }
      }

      let ratioNextSeg = 0.5
      let vx = 0
      let vy = 0
      let nextCpx0
      let nextCpy0
      // Is last point
      if (tmpK >= segLen || isPointNull(nextX, nextY)) {
        cpx1 = x
        cpy1 = y
      } else {
        vx = nextX - prevX
        vy = nextY - prevY

        const dx0 = x - prevX
        const dx1 = nextX - x
        const dy0 = y - prevY
        const dy1 = nextY - y
        let lenPrevSeg
        let lenNextSeg
        if (smoothMonotone === 'x') {
          lenPrevSeg = Math.abs(dx0)
          lenNextSeg = Math.abs(dx1)
          const dir = vx > 0 ? 1 : -1
          cpx1 = x - dir * lenPrevSeg * smooth
          cpy1 = y
          nextCpx0 = x + dir * lenNextSeg * smooth
          nextCpy0 = y
        } else if (smoothMonotone === 'y') {
          lenPrevSeg = Math.abs(dy0)
          lenNextSeg = Math.abs(dy1)
          const dir = vy > 0 ? 1 : -1
          cpx1 = x
          cpy1 = y - dir * lenPrevSeg * smooth
          nextCpx0 = x
          nextCpy0 = y + dir * lenNextSeg * smooth
        } else {
          lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0)
          lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1)

          // Use ratio of seg length
          ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg)

          cpx1 = x - vx * smooth * (1 - ratioNextSeg)
          cpy1 = y - vy * smooth * (1 - ratioNextSeg)

          // cp0 of next segment
          nextCpx0 = x + vx * smooth * ratioNextSeg
          nextCpy0 = y + vy * smooth * ratioNextSeg

          // Smooth constraint between point and next point.
          // Avoid exceeding extreme after smoothing.
          nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x))
          nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y))
          nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x))
          nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y))
          // Reclaculate cp1 based on the adjusted cp0 of next seg.
          vx = nextCpx0 - x
          vy = nextCpy0 - y

          cpx1 = x - (vx * lenPrevSeg) / lenNextSeg
          cpy1 = y - (vy * lenPrevSeg) / lenNextSeg

          // Smooth constraint between point and prev point.
          // Avoid exceeding extreme after smoothing.
          cpx1 = mathMin(cpx1, mathMax(prevX, x))
          cpy1 = mathMin(cpy1, mathMax(prevY, y))
          cpx1 = mathMax(cpx1, mathMin(prevX, x))
          cpy1 = mathMax(cpy1, mathMin(prevY, y))

          // Adjust next cp0 again.
          vx = x - cpx1
          vy = y - cpy1
          nextCpx0 = x + (vx * lenNextSeg) / lenPrevSeg
          nextCpy0 = y + (vy * lenNextSeg) / lenPrevSeg
        }
      }
      cPoint = cPoint.concat([
        [
          [cpx0, cpy0],
          [cpx1, cpy1]
        ]
      ])
      cpx0 = nextCpx0
      cpy0 = nextCpy0
      // } else {
      //   // ctx.lineTo(x, y)
      // }
    }

    prevX = x
    prevY = y
    idx += dir
  }
  // ctx.stroke()
  return cPoint
}
