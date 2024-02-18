// layout页面的接口
import http from "@/utils/http";

// 一级路由导航
export function getCategoryAPI() {
	return http({
		url: "/home/category/head"
	})
}