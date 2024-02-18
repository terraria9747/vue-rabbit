import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from "@/directives/index.js"

import App from './App.vue'
import router from './router'

// 导入初始化样式文件
import "@/styles/common.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
