// 购物车
import { defineStore } from "pinia";
import { computed, ref } from "vue";

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

	// 删除购物车
	const delCartList = (skuId) => {
		// 选择的商品id === 购物车的商品id
		const index = cartList.value.findIndex(item => skuId === item.skuId)
		cartList.value.splice(index, 1)
	}

	// 商品总数计算
	const allCount = computed(() => {
		return cartList.value.reduce((a, c) => a + c.count, 0)
	})

	// 商品总价格计算
	const allPrice = computed(() => {
		return cartList.value.reduce((a, c) => a + c.price * c.count, 0)
	})

	// 修改单选框
	const singleCheck = (skuId, selected) => {
		const item = cartList.value.find(item => item.skuId === skuId)
		item.selected = selected
	}

	return {
		cartList,
		allCount,
		allPrice,
		singleCheck,
		addCartList,
		delCartList,
	}
}, {
	persist: true,
})