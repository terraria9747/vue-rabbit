// home页面接口
import http from "@/utils/http"

export function getBannerAPI() {
	return http({
		url: "/home/banner"
	})
}