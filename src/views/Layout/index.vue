<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import { useCategory } from "@/stores/layout";
import { onMounted } from "vue";
const Category = useCategory();

onMounted(() => {
  Category.getCategory();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由入口 -->
  <!-- 添加key 破坏复用机制 强制销毁重建 -->
  <!-- 问题: banner只需请求一次, 重复销毁重建会造成资源浪费 -->
  <!-- <router-view :key="$route.fullPath" /> -->
  <router-view />
  <LayoutFooter />
</template>

<style></style>
