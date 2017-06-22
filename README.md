# demo-vue

> A Vue.js project inclued as below
* [vue-cli](https://github.com/vuejs/vue-cli) 脚手架，自动搭建项目环境, 本项目基于此构建
* [vue router](https://github.com/vuejs/vue-router)
* [vue resource](https://github.com/pagekit/vue-resource)
* [mint](https://github.com/ElemeFE/mint-ui) 饿了么出品的基于vue的 UI库

## Build Setup

``` bash
# install dependencies
npm install
```
> 安装依赖包的命令，后续两个命令执行的前提
> 开发或生产环境中，会用到的，比如编译es6语法 的babel.

``` bash
# serve with hot reload at localhost:8080
npm run dev
```
> 本地开发的命令，在node 下执行了 build 文件夹下的 dev-server.js
> 等效于在命令框中输入： node build/dev-server
> 如果想了解运行详细机制，这个文件可顺藤摸瓜

``` bash
# build for production with minification
npm run build
```
> 生产包的命令，在node 下执行了build 文件夹下的 build.js
> 等效于在命令框中输入： node build/build
> 如果想了解运行详细机制，这个文件可顺藤摸瓜

# 路由配置 见router 下index.js
> url 配参方式：
* <router-link :to="{ path: '/info', query: { openid: openid}}">信息填写页面</router-link>
* 任意标签 绑定点击事件 方法内 this.$router.push('/info?openid=' + openid) 或者 this.$router.push({path: '/info', query: {openid: openid}})

# 利用resource数据交互 注意get请求格式 及 post请求格式，响应数据结构
> 参考info.vue line25 两种请求的配参数格式  get要求额外包成{params: param} param是参数结构。
> 响应数据的一级字段data 才是结果

# main.js 全局配置

# .eslintrc.js esLint 静态代码检测的规则文件