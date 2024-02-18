// 分类列表
import http from "@/utils/http.js"

// 一级分类
export const getCategoryAPI = (id) => {
	return http({
		url: "/category",
		params: {
			id
		}
	})
}

// 二级分类
export const getSubCategoryAPI = (id) => {
	return http({
		url: '/category/sub/filter',
		params: {
			id
		}
	})
}

// 基础商品列表
export const getGoodsAPI = (data) => {
	return http({
		url: "/category/goods/temporary",
		method: "POST",
		data
	})
}
