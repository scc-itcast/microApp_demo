/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:43:39
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 13:47:52
 * @FilePath: \microApp_demo\vite-vue3-child\vite.config.ts
 * @Description: vite.config
 */
import { join, resolve } from "path";
import { writeFileSync } from "fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import postcsspxtoviewport from "./plugin/postcss-px-to-viewport";
import compressDist from "./plugin/compress-dist";

// https://vitejs.dev/config/
export default defineConfig({
  base: `${
    process.env.NODE_ENV === "production" ? "http://10.200.26.192" : ""
  }/child/vite1/`,
  build: {
    outDir: "vite1",
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 5011,
  },
  plugins: [
    vue(),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      imports: ["vue", "vuex", "vue-router"],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true, //auto generation auto-imports.d.ts file
    }),
    compressDist(),
    (function () {
      let basePath = "";
      return {
        name: "vite:micro-app",
        apply: "build",
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`;
        },
        // writeBundle 钩子可以拿到完整处理后的文件，但已经无法修改
        writeBundle(options, bundle) {
          for (const chunkName in bundle) {
            if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
              const chunk = bundle[chunkName];
              if (chunk.fileName && chunk.fileName.endsWith(".js")) {
                chunk.code = chunk.code.replace(
                  /(from|import\()(\s*['"])(\.\.?\/)/g,
                  (all, $1, $2, $3) => {
                    return all.replace($3, new URL($3, basePath));
                  }
                );
                const fullPath = join(options.dir, chunk.fileName);
                writeFileSync(fullPath, chunk.code);
              }
            }
          }
        },
      };
    })(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          rootValue() {
            return 3420;
            // return 1920
          },
          propList: ["*"],
        }),
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
    preprocessorOptions: {
      //define global scss variable
      scss: {
        charset: false,
        // additionalData: `@import "@/styles/variables.scss";`
      },
    },
  },
});
