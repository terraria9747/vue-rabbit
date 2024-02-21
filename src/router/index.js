import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import SubCategory from "@/views/SubCategory/index.vue"
import Detail from "@/views/Detail/index.vue"
import CartList from "@/views/CartList/index.vue"
import Checkout from "@/views/Checkout/index.vue"
import Pay from "@/views/Pay/index.vue"
import Paycallback from "@/views/Paycallback/index.vue"
import Member from "@/views/Member/index.vue"
import UserInfo from "@/views/Member/components/UserInfo.vue"
import UserOrder from "@/views/Member/components/UserOrder.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          // 一级分类路由
          path: "category/:id",
          component: Category
        },
        {
          // 二级分类路由
          path: "category/sub/:id",
          component: SubCategory
        },
        {
          // 详情页路由
          path: "detail/:id",
          component: Detail
        },
        {
          // 列表购物车
          path: "cartlist",
          component: CartList
        },
        {
          // 结算
          path: "checkout",
          component: Checkout
        },
        {
          // 支付
          path: "pay",
          component: Pay
        },
        {
          // 支付回调
          path: "paycallback",
          component: Paycallback
        },
        {
          // 个人中心
          path: "member",
          component: Member,
          children: [
            {
              // 个人信息
              path: "user",
              component: UserInfo,
            },
            {
              // 订单信息
              path: "order",
              component: UserOrder,
            },
          ]
        }
      ]
    },
    {
      path: "/login",
      component: Login
    },
  ],
  // 定制路由行为 - 自动滚到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
