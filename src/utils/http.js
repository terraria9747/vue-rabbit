// axios配置
import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user"

// 配置基础实例
const http = axios.create({
	baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
	timeout: 5000,
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
	const userStore = useUserStore()
	const token = userStore.userinfo.token
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config;
}, function (error) {
	return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	ElMessage({ type: "warning", message: error.response.data.message });
	return Promise.reject(error);
});

// 向外暴露
export default http