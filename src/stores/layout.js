import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout.js";

export const useCategory = defineStore('Category', () => {
	const categorylist = ref([])

	const getCategory = async () => {
		const res = await getCategoryAPI();
		categorylist.value = res.data.result;
	};

	return {
		categorylist,
		getCategory
	}
})
