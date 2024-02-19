import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from "@/directives/index.js"
import { componentPlug } from "@/components/index"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 导入初始化样式文件
import "@/styles/common.scss"

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlug)

app.mount('#app')
