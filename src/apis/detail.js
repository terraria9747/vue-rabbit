// 详情页接口
import http from "@/utils/http"

// 获取详情页数据
export const getGoodsDetailAPI = (id) => {
	return http({
		url: "/goods",
		params: {
			id
		}
	})
}

// 获取详情页热榜数据
export const getHotGoodsAPI = (id, limit, type) => {
	return http({
		url: "/goods/hot",
		query: {
			id, limit, type
		}
	})
}