// Checkout结算
import http from "@/utils/http";

// 结算信息
export const getCheckoutAPI = () => {
	return http({
		url: "/member/order/pre",
	})
}

