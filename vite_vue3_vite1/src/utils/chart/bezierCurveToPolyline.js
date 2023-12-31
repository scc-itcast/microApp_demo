// Initialize points number of per curve
const DEFAULT_SEGMENT_POINTS_NUM = 50

function getBezierCurveStartPoint(bezierCurve) {
  return bezierCurve[0]
}

function getBezierCurveEndPoint(bezierCurve) {
  return bezierCurve.slice(-1)[0][2]
}

function getBezierCurveSegments(bezierCurve) {
  return bezierCurve.slice(1)
}

/**
 * @description Get the sum of the {number[]}
 */
function getNumSum(nums) {
  return nums.reduce((sum, num) => sum + num, 0)
}

/**
 * @description Get the distance between two points
 */
function getTwoPointDistance([ax, ay], [bx, by]) {
  return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2))
}

function flatten(input) {
  return input.reduce((_, __) => [..._, ...__], [])
}

/**
 * @description  Generate a function to calculate the point coordinates at time t
 * @param {Point} beginPoint    BezierCurve begin point
 * @param {Point} controlPoint1 BezierCurve controlPoint1
 * @param {Point} controlPoint2 BezierCurve controlPoint2
 * @param {Point} endPoint      BezierCurve end point
 */
function createGetBezierCurveTPointFun(beginPoint, controlPoint1, controlPoint2, endPoint) {
  const cache = new Map()

  return (t) => {
    if (cache.has(t)) return cache.get(t)

    const subtractedT = 1 - t

    const subtractedTPow3 = Math.pow(subtractedT, 3)
    const subtractedTPow2 = Math.pow(subtractedT, 2)

    const tPow3 = Math.pow(t, 3)
    const tPow2 = Math.pow(t, 2)

    const point = [
      beginPoint[0] * subtractedTPow3 +
        3 * controlPoint1[0] * t * subtractedTPow2 +
        3 * controlPoint2[0] * tPow2 * subtractedT +
        endPoint[0] * tPow3,
      beginPoint[1] * subtractedTPow3 +
        3 * controlPoint1[1] * t * subtractedTPow2 +
        3 * controlPoint2[1] * tPow2 * subtractedT +
        endPoint[1] * tPow3
    ]

    cache.set(t, point)

    return point
  }
}

/**
 * @description Create {GetBezierCurveTPointFunction} for every segment of bezierCurve
 */
function createGetSegmentTPointFuns(bezierCurve) {
  const segments = getBezierCurveSegments(bezierCurve)
  const startPoint = getBezierCurveStartPoint(bezierCurve)

  return segments.map((segment, i) => {
    const beginPoint = i === 0 ? startPoint : segments[i - 1][2]

    return createGetBezierCurveTPointFun(beginPoint, ...segment)
  })
}

function getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum) {
  return getSegmentTPointFuns.map((getSegmentTPointFun, i) => {
    const tGap = 1 / (segmentPointsNum[i] - 1)

    return new Array(segmentPointsNum[i]).fill(0).map((_, j) => getSegmentTPointFun(j * tGap))
  })
}

function createSegmentPoints(getSegmentTPointFuns) {
  const { length } = getSegmentTPointFuns

  // Initialize the curve to a polyline
  const segmentPointsNum = new Array(length).fill(DEFAULT_SEGMENT_POINTS_NUM)

  return getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum)
}

/**
 * @description Get the distance of multiple sets of points
 */
function getPointsDistance(points) {
  return new Array(points.length - 1).fill(0).map((_, j) => getTwoPointDistance(points[j], points[j + 1]))
}

function getSegmentPointsDistance(segmentPoints) {
  return segmentPoints.map(getPointsDistance)
}

/**
 * @description Get the sum of deviations between line segment and the average length
 * @param {Array} segmentPointsDistance Segment length of polyline
 * @param {Number} avgLength            Average length of the line segment
 * @return {Number} Deviations
 */
function getAllDeviations(segmentPointsDistance, avgLength) {
  const calcDeviation = (distance) => distance.map((d) => Math.abs(d - avgLength))

  return getNumSum(segmentPointsDistance.map(calcDeviation).map(getNumSum))
}

function getSegmentPointsData(segmentPoints) {
  const segmentPointsDistance = getSegmentPointsDistance(segmentPoints)

  const lineSegmentNum = getNumSum(segmentPointsDistance.map(({ length }) => length))

  const segmentLength = segmentPointsDistance.map(getNumSum)

  const totalLength = getNumSum(segmentLength)

  const avgDistance = totalLength / lineSegmentNum
  const deviation = getAllDeviations(segmentPointsDistance, avgDistance)

  return {
    totalLength,
    segmentLength,
    avgDistance,
    deviation
  }
}

function getSegmentPointsCount(segmentPoints) {
  return flatten(segmentPoints).length
}

function reGetSegmentPoints(
  segmentPoints,
  getSegmentTPointFuns,
  { avgDistance, totalLength, segmentLength },
  precision
) {
  let pointsCount = getSegmentPointsCount(segmentPoints)

  // Add more points to enhance accuracy
  pointsCount = Math.ceil((avgDistance / precision) * pointsCount * 1.1)

  // Redistribution points acount
  const segmentPointsNum = segmentLength
    .map((length) => Math.ceil((length / totalLength) * pointsCount))
    // At least need two points
    .map((_) => (_ > 1 ? _ : 2))

  // Calculate the points after redistribution
  return getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum)
}

function recursiveCalcSegmentPoints(segmentPoints, getSegmentTPointFuns, { avgDistance }, recursiveCount) {
  const pointsCount = getSegmentPointsCount(segmentPoints)

  const stepSize = 1 / pointsCount / 10

  // Recursively for each segment of the polyline
  getSegmentTPointFuns.forEach((getSegmentTPointFun, i) => {
    const currentSegmentPointsNum = segmentPoints[i].length
    const tGap = 1 / (currentSegmentPointsNum - 1)

    const t = new Array(currentSegmentPointsNum).fill(0).map((_, j) => j * tGap)

    // Repeated recursive offset
    for (let r = 0; r < recursiveCount; r++) {
      const distance = getPointsDistance(segmentPoints[i])

      const deviations = distance.map((d) => d - avgDistance)

      let offset = 0

      for (let j = 0; j < currentSegmentPointsNum; j++) {
        if (j === 0) continue

        offset += deviations[j - 1]

        t[j] -= stepSize * offset

        if (t[j] > 1) t[j] = 1
        if (t[j] < 0) t[j] = 0
        segmentPoints[i][j] = getSegmentTPointFun(t[j])
      }
    }
  })

  return segmentPoints
}

function calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, precision, recursiveCount) {
  console.warn('-------------start-------------')
  let segmentPointsData = getSegmentPointsData(segmentPoints)

  if (segmentPointsData.deviation <= precision) return flatten(segmentPoints)

  segmentPoints = reGetSegmentPoints(segmentPoints, getSegmentTPointFuns, segmentPointsData, precision)

  if (recursiveCount <= 0) return flatten(segmentPoints)

  segmentPointsData = getSegmentPointsData(segmentPoints)

  segmentPoints = recursiveCalcSegmentPoints(segmentPoints, getSegmentTPointFuns, segmentPointsData, recursiveCount)

  return flatten(segmentPoints)
}

/**
 * @description Convert bezierCurve to polyline.
 * Calculation results cannot guarantee accuracy！
 * Recusive calculation can get more accurate results
 * @param {BezierCurve} bezierCurve bezierCurve data
 * @param {number} precision        calculation accuracy. Recommended for 1-20
 * @param {number} recursiveCount   Recursive count
 */
function convertBezierCurveToPolyline(bezierCurve, precision = 5, recursiveCount = 0) {
  const getSegmentTPointFuns = createGetSegmentTPointFuns(bezierCurve)

  const segmentPoints = createSegmentPoints(getSegmentTPointFuns)

  // Calculate uniformly distributed points by iteratively
  const polyline = calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, precision, recursiveCount)

  const endPoint = getBezierCurveEndPoint(bezierCurve)
  polyline.push(endPoint)

  return polyline
}

/**
 * @description Transform bezierCurve to polyline
 * @param {BezierCurve} bezierCurve bezier curve
 * @param {number} precision        Wanted precision (Not always achieveable)
 * @param {number} recursiveCount   Recursive count
 */
export function bezierCurveToPolyline(bezierCurve, precision = 5, recursiveCount = 0) {
  if (!(bezierCurve instanceof Array)) throw new Error(`bezierCurveToPolyline: Invalid input of ${bezierCurve}`)

  if (bezierCurve.length <= 1)
    throw new Error(`bezierCurveToPolyline: The length of the bezierCurve should be greater than 1`)

  if (typeof precision !== 'number') throw new Error(`bezierCurveToPolyline: Type of precision must be number`)

  return convertBezierCurveToPolyline(bezierCurve, precision, recursiveCount)
}

export function getBezierCurveLength(bezierCurve, precision = 5, recursiveCount = 0) {
  const polyline = bezierCurveToPolyline(bezierCurve, precision, recursiveCount)

  const pointsDistance = getPointsDistance(polyline)

  return getNumSum(pointsDistance)
}

export default bezierCurveToPolyline
