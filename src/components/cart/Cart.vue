<script setup>
import bag from "@/assets/bag.png"

import CartDetail from "./CartDetail.vue"

import {useMealsStore} from "@/store/mealsStore.js";
import {ref} from "vue";

const mealStore = useMealsStore()
const emits = defineEmits(["toPay", "hide"])
const props = defineProps(["isShow"])


const toPay = () => {
  if (mealStore.totalCount <= 0) return
  emits("toPay")
}

const hideDetail = () => {
  emits("hide")
}


</script>


<template>
  <div class="cart">
    <div class="bag">
      <img :src="bag">
      <span v-show="mealStore.totalCount > 0" class="bage-count">{{ mealStore.totalCount }}</span>
    </div>

    <div class="total-price">
      <p v-if="mealStore.totalCount <= 0" class="non-goods">未选购商品</p>
      <p v-else class="price">{{ mealStore.totalAmount }}</p>
    </div>

    <div class="button-pay">
      <button @click="toPay" :class="[mealStore.totalCount == 0 ? 'deactive' : 'active']">去结算</button>
    </div>
  </div>

  <CartDetail :is-show="props.isShow" @hide="hideDetail"></CartDetail>

</template>

<style scoped>
.cart {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 700rem;
  height: 85rem;
  border-radius: 50rem;
  margin: 0 25rem;
  position: fixed;
  bottom: 40rem;
  background-color: rgb(58, 58, 58);
  margin-right: 2rem;
}

.bag {
  width: 110rem;
  position: absolute;
  bottom: -18rem;
}

.bage-count {
  position: absolute;
  top: 5rem;
  right: -10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  border-radius: 30rem;
  color: white;
  background-color: red;
}

.total-price {
  line-height: 85rem;
  font-weight: bold;
  color: rgb(167, 168, 167);
  margin-left: 130rem;
}

.non-goods {
  font-size: 30rem;
}

.price {
  font-size: 35rem;
  color: white;
}

.price::before {
  content: "￥";
  font-size: 20rem;
}

.button-pay {
}

.deactive, .active {
  background-color: rgb(248, 188, 0);
  border: none;
  width: 200rem;
  height: 85rem;
  border-radius: 50rem;
  font-size: 33rem;
}

.deactive {
  color: rgb(154, 159, 156);
  background-color: rgb(108, 107, 107);
}


</style>