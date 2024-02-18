// home页面接口
import http from "@/utils/http"

// banner信息
export function getBannerAPI(params = {}) {
	// 把distributionSite从params中解构出来, 并赋值为1
	const { distributionSite = 1 } = params
	return http({
		url: "/home/banner",
		params: {
			distributionSite
		}
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

// 热门品牌
export function getBrandAPI() {
	return http({
		url: "/home/goods"
	})
}