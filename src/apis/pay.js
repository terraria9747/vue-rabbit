// 支付接口
import http from "@/utils/http";

// 获取支付Id
export const getPayAPI = (data) => {
	return http({
		url: "/member/order",
		method: "POST",
		data
	})
}

// 获取支付信息
export const getPayInfoAPI = (id) => {
	return http({
		url: `/member/order/${id}`,
	})
}