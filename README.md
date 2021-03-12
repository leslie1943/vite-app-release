# Vue 3 + Typescript + Vite

### 🚀 一个Vite创建的Vue项目中, 即支持.vue文件组件, 又支持.tsx文件组件, 如何配置?
- step-1: 
```bash
# npm install @vitejs/plugin-vue-jsx
```
- step-2: 
```js
// vite.config.ts
import vuejsx from '@vitejs/plugin-vue-jsx' // support tsx component

export default defineConfig({
  // 在 plugins 配置 vuejsx 的构造函数, 让项目支持 tsx 形式组件
  plugins: [vue(), vuejsx({})] 
}
```
### 🚀 让 vite 支持 sass/scss
- 安装依赖: `npm install sass -D`
- 重新运行: `npm run dev`

### 🚀 Vite Release 发布
- npm run build: 生成`dist`
- 将`dist`整体 拷贝至 `nginx/html`目录下
- `start nginx`: 启动 `nginx` 服务
- `nginx -s reload`: 重启 `nginx` 服务
- 浏览器查看`http://localhost:3343/`: `2000`是`3343`配置的端口


### Vite Release
- npm run build: 生成`dist`
- 将`dist`整体 拷贝至 `nginx/html`目录下
- `start nginx`: 启动服务
- 浏览器查看`http://localhost:3343/`: `3343`是`nginx`配置的端口