<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePannel from "./components/HomePannel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomePannel name="新鲜好物" sub-title="新鲜好物 好多商品">
    <div>我是新鲜好物模块</div>
  </HomePannel>
  <HomePannel name="人气推荐" sub-title="人气推荐 好多商品">
    <div>我是人气推荐模块</div>
  </HomePannel>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>

<style></style>
