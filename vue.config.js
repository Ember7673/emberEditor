/*
 * @Author: wangtengteng
 * @Date: 2020-10-30 18:13:15
 * @LastEditTime: 2020-11-18 10:25:50
 * @FillPath: Do not edit
 */
const path = require('path');
module.exports = {
  // pages: {
  //   index: {
  //     entry: 'src/lib/index.js'
  //   }
  // },
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `
      //     @import "~@/assets/name.scss";
      //   `
      // },
      // scss: {
      //   prependData: `@import "~@/variables.scss";`
      // },
      // less: {
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
  },
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    public: process.env.VUE_APP_PUBLIC_URL,
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
  },
  configureWebpack: {
    name: '富文本编辑器',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhiteSpace = false;
        return options;
      })
      .end();
  },
  lintOnSave: false,
}

// module.exports = (api, options, rootOptions) => {
//   // 修改 `package.json` 里的字段
//   api.extendPackage({
//     dependencies: {
//       "element-ui": "^2.14.1",
//       "axios": "^0.21.0"
//     }
//   });
// }
