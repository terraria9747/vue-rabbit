// 我的订单
import http from "@/utils/http";

export const getMyOrderAPI = (data) => {
	return http({
		url: "/member/order",
		data
	})
}