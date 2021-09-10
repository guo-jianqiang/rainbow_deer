import { defineConfig } from 'dumi';

const repo = 'rainbow_deer';

export default defineConfig({
  title: repo,
  outputPath: 'docs',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  // exportStatic: {},
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  resolve: {
    includes: [
      'packages/dialog/src',
      'packages/button/src',
      'packages/icon/src',
      'packages/layout/src',
      'packages/autoType/src'
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
  // more config: https://d.umijs.org/config
})
