<script setup>
import Counter from "@/components/ui/counter/Counter.vue";

const props = defineProps(["meal"])

</script>

<template>
  <div class="meal">

    <div class="img">
      <img :src="props.meal.img"></img>
    </div>

    <div class="info">
      <div class="meal-name">
        <p class="title">{{ props.meal.title }}</p>
        <p class="desc">{{ props.meal.desc }}</p>
      </div>

      <div class="price">
        <p class="price-inner">{{ props.meal.price }}</p>

        <Counter :meal="props.meal"></Counter>

      </div>

    </div>
  </div>

</template>

<style scoped>
.meal {
  display: flex;
  background-color: white;
  height: 250rem;
  padding: 0 20rem;
  border-bottom: 1px solid #e1e1e1;
}

.img {
  width: 200rem;
  display: flex;
  align-items: center;
}


.info {
  width: 510rem;
  padding: 40rem 20rem;
}

.meal-name {

}

.title {
  font-size: 35rem;
}

.desc {
  font-size: 20rem;
  color: #8e8e8e;
  margin-top: 10rem;
}

.price {
  display: flex;
  justify-content: space-between;
  margin-top: 25rem;
}

.price-inner {
  font-size: 30rem;
  font-weight: bold;
}

.price-inner::before {
  content: "￥";
  font-size: 20rem;
}

</style>