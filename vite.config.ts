import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx' // Support tsx component

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), /* TODO: NEED_RECORD */ vuejsx({})],
  base: './', //打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //设置别名
    },
  },
  server: {
    port: 3343, //启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://gitlab.devops.viewchain.net',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/crumbIssuer': {
        target: 'https://ci.devops.viewchain.net/crumbIssuer',
        changeOrigin: true,
        secure: false,
      },
      '/gdszyepro': {
        target: 'https://epro-ps231-gdszy.test.viewchain.net/gdszyepro',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gdszyepro/, ''),
      },
      // 配置本地的 mongodb 开发的 api代理
      '/sz': {
        target: 'http://localhost:3000/sz',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sz/, ''),
      },
    },
    cors: true,
  },
  esbuild: {},
})
