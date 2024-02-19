// 详情页接口
import http from "@/utils/http"

export const getGoodsDetailAPI = (id) => {
	return http({
		url: "/goods",
		params: {
			id
		}
	})
}