// 插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
	install(app) {
		app.directive('img-lazy', {
			mounted(el, binding) {
				const { stop } = useIntersectionObserver(
					el,
					([{ isIntersecting }]) => {
						if (isIntersecting) {
							// 进入视口区域
							el.src = binding.value
							// 在监听的图片第一次完成加载之后就停止监听
							stop()
						}
					},
				)
			}
		})
	}
}