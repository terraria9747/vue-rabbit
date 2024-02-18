import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入初始化样式文件
import "@/styles/common.scss"
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 自定义指令
app.directive('img-lazy', {
	mounted(el, binding) {
		useIntersectionObserver(
			el,
			([{ isIntersecting }]) => {
				if (isIntersecting) {
					// 进入视口区域
					el.src = binding.value
				}
			},
		)
	}
})

app.mount('#app')
