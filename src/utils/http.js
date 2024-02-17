// axios配置
import axios from "axios";

// 配置基础实例
const http = axios.create({
	baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
	timeout: 5000,
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	return config;
}, function (error) {
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	return Promise.reject(error);
});

// 向外暴露
export default http