/*
 * @Description:
 * @Author: scc
 * @Date: 2022-09-21 10:59:37
 * @LastEditTime: 2022-09-23 14:33:05
 * @LastEditors: scc
 * @FilePath: \zyf-group-large_screen\src\utils\animeUtils.js
 */
import animeJs from 'animejs'
export const numAnime = (el, data, round = 1, format = null) => {
  animeJs({
    targets: el,
    innerHTML: data,
    easing: 'linear',
    round: round, // Will round the animated value to 1 decimal
    duration: 1000,
    update: (anim) => {
      if (format && Object.prototype.toString.call(format) == '[object Function]') {
        anim.animatables[0].target.innerHTML = format(anim.animatables[0].target.innerHTML)
      }
    }
  })
}
