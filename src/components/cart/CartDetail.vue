<script setup>
import Mask from "@/components/ui/mask/Mask.vue";
import Meals from "@/components/meals/Meals.vue";

import {useMealsStore} from "@/store/mealsStore.js";
import Cart from "@/components/cart/Cart.vue";
import Dialog from "@/components/ui/dialog/Dialog.vue";
const mealStore = useMealsStore()
import {ref} from "vue";
import Checkout from "@/components/checkout/Checkout.vue";

const isShowDialog = ref(false)
const emits = defineEmits(["hide"])


const clearCart = () => {
//   弹出 二次确认弹窗
  isShowDialog.value = true

}

const handleOK = () => {
  // 商品的 count 设置为 0
  // 隐藏 弹窗
  // 隐藏 餐品详情
  mealStore.dataList.forEach(item => item.count = 0)
  isShowDialog.value = false
  emits("hide")
}

// 控制支付页的 显示
const isShowCheckout = ref(false)
// 显示 支付页
const toPay = () => {
  isShowCheckout.value = true
}
// 关闭 支付页
const closeCheckout = () => {
  isShowCheckout.value = false
}

</script>

<template>

  <Mask :="$attrs" @hide="emits('hide')">

    <div class="cart-detail">
      <header class="header">
        <h2>餐品详情</h2>
        <a @click.self="clearCart" class="clear" href="javascript:;">
          <i class="icon ri-delete-bin-5-line"></i>
          清空购物车
        </a>
      </header>

      <Meals :meals="mealStore.cartList"></Meals>

      <Cart @to-pay="toPay"></Cart>
    </div>
  </Mask>

  <Dialog :is-show="isShowDialog" @hide="isShowDialog = false" @ok="handleOK">
    确认清空购物车吗?
  </Dialog>

<!--  餐品详情-->
  <Checkout :is-show="isShowCheckout" @close="closeCheckout"></Checkout>

</template>

<style scoped>
.cart-detail {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 85%;
  background-color: #fff;
  border-top-left-radius: 30rem;
  border-top-right-radius: 30rem;
}

.header {
  display: flex;
  padding: 30rem 30rem;
  justify-content: space-between;
  align-items: center;
}


.clear {
  text-underline: none;
  color: #8e8e8e;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}

.icon {
  margin-right: 10rem;
}

.meals {
  height: auto;
  max-height: calc(100vh - 400rem);
}


</style>