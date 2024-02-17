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
1. 二级路由
- 首页 | ""
- 分类 | /category

# 二.