<script setup>
const props = defineProps(["meal"])

import {useMealsStore} from "@/store/mealsStore.js";
const { addCount, subCount } = useMealsStore()



const add = () => {
  addCount(props.meal)
}

const sub = () => {
  subCount(props.meal)
}

</script>

<template>
  <div class="counter">

    <template v-if="props.meal.count>0">

      <span class="sub" @click="sub">
        <i class="ri-subtract-line"></i>
      </span>

      <span class="count">{{ props.meal.count }}</span>

    </template>

    <span class="add" @click="add">
      <i class="ri-add-fill"></i>
    </span>
  </div>
</template>

<style scoped>
.counter {
  display: flex;

}

.sub, .add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  height: 35rem;
  border-radius: 30rem;
  font-size: 35rem;
  color: black;
  background-color: white;
  border: none;
}

.sub {
  background-color: white;
  border: 1px solid #303030;
}

.add {
  background-color: rgb(247, 187, 0);
  border: 1px solid rgb(247, 187, 0);
}

.count {
  margin: 0 10rem;
}


</style>