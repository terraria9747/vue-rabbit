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
  <router-view />
  <LayoutFooter />
</template>

<style></style>
