// 登录业务
import http from "@/utils/http"

// 登录
export const getLoginAPI = ({ account, password }) => {
	return http({
		url: "/login",
		method: "POST",
		data: {
			account,
			password
		}
	})
}