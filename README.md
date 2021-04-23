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


### nginx 配置
- api 代理修改配置才能让让接口前缀指向接口URL
```nginx
location /gdszyepro {
  proxy_pass https://epro-ps231-gdszy.test.viewchain.net/gdszyepro;
}

location /api {
  proxy_pass https://gitlab.devops.viewchain.net;
}

```

### Jest
- Install dependencies: `npm i jest vue-jest babel-jest -D`
- `jest-vue-preprocessor` is needed for making jest understand .vue files, and babel-jest for the integration with Babel.
- `npm i jest-vue-preprocessor -D`
- `npm i -D vue-test-utils`
- add following jest configration in the package.json
```json
  "jest": {
    "moduleNameMapper": {
      "^vue$": "vue/dist/vue.common.js"
    },
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    }
  }
```

### .dot fine for different env
```bash
# JUST A FLAG For 开发环境
ENV = 'development'

# API BASE URL
VITE_APP_BASE_API=https://epro.test.viewchain.net/epro # OK
VITE_APP_TITLE=Leslie Release Tool # OK
VITE_APP_TEST_ATTR=Leslie Release Tool # OK
VITE_TEST_ATTR=Leslie Release Tool # OK
TEST_ATTR=Leslie ATTR # NOT
```
- 必须以`VITE_`开头,配置完之后需要重新启动项目或者打包项目

### .dot files for different env - Typescript IntelliSense
- To achieve, you can create an` env.d.ts` in `src` directory, then augment `ImportMetaEnv` like this:
```ts
interface ImportMetaEnv {
  VITE_APP_TITLE: string
  // more env variables...
}
```