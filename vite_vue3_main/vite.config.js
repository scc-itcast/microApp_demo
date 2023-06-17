/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 15:23:28
 * @FilePath: \microApp_demo\vite_vue3_main\vite.config.js
 * @Description: config
 */
import { resolve } from 'path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import postcsspxtoviewport from './plugin/postcss-px-to-viewport'
import compressDist from './plugin/compress-dist'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/main/',
  build: {
    outDir: 'main',
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 3000
    // commonjsOptions: {
    //   transformMixedEsModules: true,
    // },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag)
        }
      }
    }),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vuex', 'vue-router'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true //auto generation auto-imports.d.ts file
    }),
    compressDist()
  ],
  server: {
    port: 5000,
    open: true,
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '/mygit/micro-zoe/micro-app/']
    },
    proxy: {
      '/assets/SmartBuildingEconomy': {
        target: 'http://localhost:5001/'
      },
      '/child/SmartBuildingEconomy': {
        target: 'http://localhost:5001/'
      },
      '/assets/vite1': {
        target: 'http://localhost:5011/'
      },
      '/child/vite1': {
        target: 'http://localhost:5011/'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      //remove build charset warning
      plugins: [
        postcsspxtoviewport({
          rootValue() {
            // return file.indexOf('src-mobile') !== -1 ? 37.5 : 1920
            return 3420
            // return 1920
          },
          propList: ['*']
        }),
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    },
    preprocessorOptions: {
      //define global scss variable
      scss: {
        charset: false
        // additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
