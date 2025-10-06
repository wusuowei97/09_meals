<script setup>

import {ref} from "vue";

const props = defineProps(["isShow"])
const emits = defineEmits(["close"])
import {useMealsStore} from "@/store/mealsStore.js";
import Counter from "@/components/ui/counter/Counter.vue";

const mealStore = useMealsStore()

// const cartList = ref([
//   {
//     id: "6",
//     title: "麦香鸡",
//     desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
//     price: 14,
//     img: "/images/meals/6.png",
//     count: 1
//   },
//   {
//     id: "7",
//     title: "吉士汉堡包",
//     desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
//     price: 12,
//     img: "/images/meals/7.png",
//     count: 1
//   }
// ])

const close = () => {
  emits("close")
}

const toPay = () => {
  console.log("去支付")
}

</script>

<template>
  <div v-if="props.isShow" class="checkout">

    <span @click="close" class="icon">
      <i class="ri-close-fill"></i>
    </span>

    <div class="checkout-detail">
      <header>餐品详情</header>

      <div class="list">
        <div class="item" v-for="item in mealStore.cartList" :key="item.id">
          <div class="img">
            <img :src="item.img"/>
          </div>

          <div class="info">
            <p class="title">{{ item.title }}</p>

            <div class="count">
              <Counter :meal="item" ></Counter>
              <p class="count-price">￥<span>{{ item.price * item.count }}</span></p>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <p>合计￥<span>{{ mealStore.totalAmount }}</span></p>
      </footer>
    </div>

    <div class="cart">
      <div class="total-price">
        <p class="price">{{ mealStore.totalAmount }}</p>
      </div>

      <div class="button-pay">
        <button @click="toPay" :class="[mealStore.totalCount == 0 ? 'deactive' : 'active']">去支付</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.checkout {
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20rem;
  background-color: rgb(240, 240, 240);
  z-index: 99999;
}

.icon {
  font-size: 50rem;
  font-weight: bold;
  margin: 0 0 30rem 30rem;
}

.checkout-detail {
  background-color: #fff;
  margin: 0 30rem;
  border-radius: 20rem;
}

.checkout-detail header {
  padding: 25rem;
  font-size: 30rem;
  font-weight: bold;
  border-bottom: 1px solid #f5f5f5;
}

.list {
  max-height: 700rem;
  overflow: auto;
}

.item {
  display: flex;
  align-items: center;
  height: 180rem;
  margin-right: 30rem;
}

.img {
  width: 170rem;
}

.info {
  flex: auto;
  margin-left: 20rem;
}

.title {
  font-size: 28rem;
  font-weight: bold;
  margin-bottom: 30rem;
}

.count {
  display: flex;
  justify-content: space-between;
}

.count .count-price {
  font-size: 20rem;
  color: black;
}

.count .count-price span {
  font-size: 30rem;
  font-weight: bold;
}

footer {
  height: 160rem;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 30rem;
  border-top: 1px dashed #eaeaea;
  position: relative;
}

footer::before, footer::after {
  content: "";
  display: flex;
  width: 30rem;
  height: 30rem;
  border-radius: 30rem;
  background-color: rgb(240, 240, 240);
  position: absolute;

}
footer::before {
  top: -15rem;
  left: -15rem;
}
footer::after {
  top: -15rem;
  right: -15rem;
}

footer p {
  font-size: 24rem;
}

footer p span {
  font-size: 30rem;
  font-weight: bold;
}




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


.total-price {
  line-height: 85rem;
  font-weight: bold;
  color: rgb(167, 168, 167);
  margin-left: 40rem;
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