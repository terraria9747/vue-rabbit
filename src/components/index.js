// 通用组件统一注册全局组件
import XtxSku from "./XtxSku/index.vue"
import imageView from "./imageView/index.vue"

export const componentPlug = {
	install(app) {
		app.component("XtxSku", XtxSku)
		app.component("imageView", imageView)
	}
}