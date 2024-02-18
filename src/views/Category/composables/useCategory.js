// 分类逻辑
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
// vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航
import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";

// 获取面包屑导航数据
export function useCategory() {
	const route = useRoute();
	const categoryList = ref([]);
	const category = async (id = route.params.id) => {
		// 组件内部获取路由参数
		const res = await getCategoryAPI(id);
		categoryList.value = res.data.result;
	};

	onMounted(() => {
		category();
	});

	// 监听路由跳转
	onBeforeRouteUpdate((to) => {
		// to 目标路由
		// console.log("路由跳转了", to);
		category(to.params.id);
	});

	return {
		categoryList
	}
}