<!-- 二级路由页面 -->
<script setup>
import { getSubCategoryAPI, getGoodsAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import HomeGoodsltem from "@/views/Home/components/HomeGoodsltem.vue";

const route = useRoute();

// 获取面包屑导航列表数据
const subCategoryList = ref([]);
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(route.params.id);
  subCategoryList.value = res.data.result;
};

// 获取基本商品数据
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime", // publishTime,orderNum,price,evaluateNum
});
const goodList = ref([]);
const getGoods = async () => {
  const res = await getGoodsAPI(reqData.value);
  goodList.value = res.data.result.items;
};

// 切换tab栏
const onTabChange = () => {
  // console.log("tab栏切换了", reqData.value.sortField);
  reqData.value.page = 1;
  getGoods();
};

// 无限滚动加载数据
const disabled = ref(false);
const load = async () => {
  console.log("滚动到底部触发");
  // 下一页数据
  reqData.value.page++;
  const res = await getGoodsAPI(reqData.value);
  // 新老数据拼接
  goodList.value = [...goodList.value, ...res.data.result.items];
  // 如果没有数据, 停止加载
  if (res.data.result.items === "") {
    disabled.value = true;
  }
};

onMounted(() => {
  getSubCategory();
  getGoods();
});
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${subCategoryList.parentId}`"
          >{{ subCategoryList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="onTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <HomeGoodsltem
          v-for="good in goodList"
          :good="good"
          :key="good.id"
        ></HomeGoodsltem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
