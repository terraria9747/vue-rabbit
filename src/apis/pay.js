// 支付接口
import http from "@/utils/http";

export const getPayAPI = (data) => {
	return http({
		url: "/member/order",
		method: "POST",
		data
	})
}