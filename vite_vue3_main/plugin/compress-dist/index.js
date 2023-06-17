/*
 * @Description: 压缩dist文件夹
 * @Author: scc
 * @Date: 2022-04-15 11:13:31
 * @LastEditTime: 2023-06-17 15:24:56
 * @LastEditors: guoke scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\plugin\compress-dist.js
 */
import { cwd } from 'process'
import { resolve } from 'path'
import compressing from 'compressing'
export default function compressDist(config) {
  console.log(config)
  return {
    name: 'compress-dist',
    closeBundle() {
      const rootPath = cwd()
      const sourcePath = resolve(rootPath, 'main')
      compressing.zip.compressDir(sourcePath, 'main.zip')
    }
  }
}
