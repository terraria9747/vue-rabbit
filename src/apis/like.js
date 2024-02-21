// 猜你喜欢
import http from "@/utils/http";

export const getLikeAPI = () => {
	return http({
		url: "/goods/relevant",
	})
}
