// home页面接口
import http from "@/utils/http"

// banner信息
export function getBannerAPI() {
	return http({
		url: "/home/banner"
	})
}

// 好物优选
export function getNewAPI() {
	return http({
		url: "/home/new",
	})
}

// 人气推荐
export function getHotAPI() {
	return http({
		url: "/home/hot",
	})
}