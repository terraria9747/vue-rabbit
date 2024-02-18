// banner逻辑
import { getBannerAPI } from "@/apis/home";
import { onMounted, ref } from "vue";


// 获取banner数据
export function useBanner() {
	const bannerList = ref([]);
	const getBanner = async () => {
		const res = await getBannerAPI({
			distributionSite: "2",
		});
		bannerList.value = res.data.result;
	};

	onMounted(() => {
		getBanner();
	});

	return {
		bannerList
	}
}