// 购物车
import http from "@/utils/http";

// 加入购物车
export const addCartAPI = ({ skuId, count }) => {
	return http({
		url: "/member/cart",
		method: "POST",
		data: {
			skuId,
			count
		}
	})
}

// 获取库存
export const getCartAPI = () => {
	return http({
		url: "/member/cart",
	})
}

// 删除购物车
export const delCartAPI = (ids) => {
	return http({
		url: "/member/cart",
		method: "DELETE",
		data: {
			ids
		}
	})
}

// 合并购物车
export const mergeCartAPI = (data) => {
	return http({
		url: "/member/cart/merge",
		method: "POST",
		data
	})
}
