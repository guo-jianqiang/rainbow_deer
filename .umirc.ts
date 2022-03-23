import { defineConfig } from 'dumi';

const repo = 'rainbow_deer';

export default defineConfig({
  title: repo,
  outputPath: 'docs',
  mode: 'site',
  hash: true,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  resolve: {
    includes: [
      'packages/dialog/src',
      'packages/button/src',
      'packages/icon/src',
      'packages/layout/src',
      'packages/cloudBanner/src',
      'packages/autoType/src',
      'packages/sliderSelect/src',
      'packages/contextmenu/src',
      'packages/tree/src',
      'packages/keywordHighLighting/src'
    ]
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/guo-jianqiang/rainbow_deer',
    },
  ],
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "style": true }]
  ]
})
