// 倒计时逻辑
import { ref, computed, onUnmounted } from "vue"
import dayjs from "dayjs"

export const useCountDown = () => {
	// 初始时间
	const time = ref(0)
	let timer = null
	// 格式化时间
	const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"))

	// 倒计时逻辑
	const start = (currentTime) => {
		time.value = currentTime;
		const timer = setInterval(() => {
			time.value--
		}, 1000);
	}

	onUnmounted(() => {
		timer && clearInterval(timer)
	})

	// 暴露值
	return {
		formatTime,
		start
	}
}

