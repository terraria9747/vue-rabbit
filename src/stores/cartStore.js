// 购物车
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
	// 购物车信息
	const cartList = ref([])

	// 添加购物车
	const addCartList = (goods) => {
		// 如果该商品有, 添加数量; 如果没有, 添加商品
		const item = cartList.value.find((item) => goods.skuId === item.skuId)
		if (item) {
			item.count++
		} else {
			cartList.value.push(goods)
		}
	}

	return {
		cartList,
		addCartList
	}
}, {
	persist: true,
})