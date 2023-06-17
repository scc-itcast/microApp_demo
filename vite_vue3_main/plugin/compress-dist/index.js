/*
 * @Description: 压缩dist文件夹
 * @Author: scc
 * @Date: 2022-04-15 11:13:31
 * @LastEditTime: 2022-07-08 14:35:22
 * @LastEditors: scc
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
      const sourcePath = resolve(rootPath, 'dist')
      compressing.zip.compressDir(sourcePath, 'dist.zip')
    }
  }
}
