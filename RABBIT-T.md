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

## 2.banner渲染
1. 定义接口
2. 定义banner模板
3. 请求接口获取数据
4. 前端渲染

## 3.面板组件封装
问: 解决了什么问题? <br />
答: 1.复用问题 2.业务维护问题 <br />

思路: 
- 1.搭建纯静态的部分, 不管可变的部分
- 2.抽象可变的部分为组件参数
- 非复杂的模板抽象为props, 复杂的结构模板抽象为插槽

## 4.新鲜好物和人气推荐实现
1. 准备模板
2. 定制props
3. 定制插槽内容(接口 + 渲染模板)

## 5.图片懒加载指令实现
电商网站的首页通常会很长，用户不一定能访问到页面靠下面的图片，<br />
这类图片通过懒加载优化手段可以做到只有进入视口区域才发送图片请求 <br />

指令用法:
```js
<img v-img-lazy="item.pic">
```
在图片img身上绑定指令，该图片只有在正式进入到视口区域时才会发送图片网络请求 <br />

1. <a href="https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks">指令语法 - 自定义指令</a>
2. <a href="https://www.vueusejs.com/core/useIntersectionObserver/#useintersectionobserver">判断图片是否进入视口(vueUse)</a>
3. 进入视口, 发送图片资源请求 (img.src=url)

## 6.图片懒加载指令优化
1. 把懒加载的逻辑封装成插件, 在主文件中注册
2. 在监听的图片第一次完成加载之后就停止监听, 避免重复监听

## 7.Product产品列表
1. 准备模板
2. 封装接口
3. 获取数据渲染模板
4. 图片懒加载

## 8.Home-Goodsltem组件封装
很多个业务模块中都需要用到同样的商品展示模块，没必要重复定义，封装起来，方便复用  <br />
核心思想：把要显示的数据对象设计为props参数，传入什么数据对象就显示什么数据 <br />

# 四.一级分类
## 1.一级分类路由传参跳转
根据参数跳转到指定的路由页面

## 2.面包屑导航渲染
1.搭建结构
2.定义接口
3.发送请求获取数据
```js
// 组件内部获取路由参数
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route.params.id)
```
4.前端渲染

## 3.分类页banner
1. 定义接口
2. 发起请求获取数据
3. 前端渲染

## 4.激活状态 | 分类列表渲染
1. 激活状态
```js
active-class="active"
<RouterLink active-class="active" :to="`/category/${item.id}`">{{item.name}}</RouterLink>
```
2. 分类列表渲染

## 5.路由缓存问题
缓存问题：
当路由path一样，参数不同的时候会选择直接复用路由对应的组件 <br />
进而导致数据无法事实更新 <br />

解决方案：
1. 给 routerv-view 添加key属性，破坏缓存
2. 使用 onBeforeRouteUpdate钩子函数，做精确更新

## 6.逻辑函数拆分业务
把banner和category的逻辑拆分成两个文件
1. 按照业务声明以 `use` 打头的逻辑函数
2. 把独立的业务逻辑封装到各个函数内部
3. 函数内部把组件中需要用到的数据或者方法return出去
4. 在组件中调用函数把数据或者方法组合回来使用

# 五.二级分类
# 1. 二级路由跳转
1. 搭建模板
2. 配置路由
3. 添加跳转

# 2. 二级分类面包屑导航
1. 封装接口
2. 调用接口
3. 前端渲染 + 测试跳转

# 3. 基础商品列表基础展示
1. 封装接口
2. 调用接口
3. 前端渲染

# 4. 筛选功能
1. 点击激活项, 获取激活项参数
2. 根据激活项参数, 使用新参数发起请求

# 5. 无限加载功能实现
1. 配置 v-infinite-scroll (监听是否满足触底条件)
2. 页数加一 获取下一页数据
3. 老数据和新数据进行拼接 (展开运算符)
4. 加载完毕, 结束监听

