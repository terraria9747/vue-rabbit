// 二级分类列表
import http from "@/utils/http.js"

export const getCategory = (id) => {
	return http({
		url: "/category",
		params: {
			id
		}
	})
}