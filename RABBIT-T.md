# 一.项目初始化
## 1. 创建项目

## 2. 初始化git仓库
```js
1. git init
2. git add . 
3. git commit -m “init”
```

## 3. 新建文件夹
- apis | API接口文件夹
- composables | 组合式函数文件夹
- directives | 全局指令文件夹
- styles | 全局样式文件夹
- utils | 工具函数文件夹

## 4.jsconfig.json配置别名路径
```js
{
  "compilerOptions" : {
    "baseUrl" : "./",
    "paths" : {
      "@/*":["src/*"]
    }
  }
}
```

## 5.按需引入elementPlus

## 6.elementPlus主题定制
<a href="https://element-plus.org/zh-CN/guide/theming.html#%E6%9B%B4%E6%8D%A2%E4%B8%BB%E9%A2%98%E8%89%B2">更换主题色</a>

- 1.安装scss
- 2.准备定制样式文件
- 3.对elementPlus样式进行覆盖

## 7.配置axios
1.安装axios
2.配置基础实例(统一接口配置)
- 1.接口基础地址
- 2.接口超时时间
- 3.请求拦截器
- 4.响应拦截器

## 8.项目路由设计
1. 一级路由
- Layout | /
- 登录页 | /login
2. 二级路由
- 首页 | ""
- 分类 | /category

## 9.处理图片资源和样式资源
1. 图片资源 assets
2. 样式资源 styles
3. 安装`error lens`插件(提供错误警告的vscode插件)

## 10.scss文件自动导入
1. 新建一个var.scss文件
2. 通过`vite.config.js`配置自动导入文件

# 二.layout页面布局与渲染
## 1.静态模板结构搭建

## 2.字体图标引入
阿里巴巴矢量图标库

## 3.动态渲染一级导航数据
1.封装接口
2.发起请求
3.前端渲染

## 4.吸顶导航
1. 准备吸顶导航组件
2. 获取滚动坐标 (vueuse)<br />
<a href="https://www.vueusejs.com/core/useScroll/">useScroll | 响应式获取滚动位置和状态。</a>
3. 以滚动距离做判断条件控制组件盒子展示隐藏

## 5.pinia优化导航数据
俩个导航中的列表是完全一致的，但是要发送俩次网络请求，存在浪费。<br />
通过Pinia集中管理数据，再把数据给组件使用<br />
1. pinia定义请求方法
2. 在layout和吸顶导航组件的父组件发请求
3. 在layout和吸顶导航组件分别渲染数据


# 三.Home页面布局与渲染
## 1.整体结构拆分与分类实现
- 左侧分类
- 轮播图
- 新鲜好物
- 人气推荐
- 产品列表

## 2.

