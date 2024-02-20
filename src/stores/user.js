// 用户信息
import { defineStore } from "pinia"
import { getLoginAPI } from "@/apis/login.js";
import { ref } from "vue"
import { useCartStore } from "./cartStore"

export const useUserStore = defineStore("user", () => {
	const cartStore = useCartStore()
	// 用户信息
	const userinfo = ref({});

	// 登录请求
	const getUserInfo = async ({ account, password }) => {
		const res = await getLoginAPI({ account, password });
		userinfo.value = res.data.result
	}

	// 退出登录
	const clearUserInfo = () => {
		userinfo.value = {}
		cartStore.clearCartList()
	}

	return {
		userinfo,
		getUserInfo,
		clearUserInfo
	}
}, {
	persist: true,
}
)

