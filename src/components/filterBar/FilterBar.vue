<script setup>
import {storeToRefs} from 'pinia'

import {useMealsStore} from "@/store/mealsStore.js";
const mealsStore = useMealsStore()
const { keyword } = storeToRefs(mealsStore)



</script>

<template>
  <div class="filter-bar">
    <span class="icon">
      <i class="ri-search-line"></i>
    </span>
    <input class="filter-input" placeholder="请输入关键字" type="text" v-model.trim="keyword">

  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  height: 70rem;
  margin: 30rem 20rem;
  position: relative;
}

.icon {
  position: absolute;
  left: 20rem;
  line-height: 70rem;
}
.icon i {
  font-size: 35rem;
  color: #8e8e8e;
}

.filter-input {
  background-color: rgb(242, 242, 242);
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 800rem;
  padding-left: 70rem;
  color: #585858;
  font-size: 25rem;
  outline: none;
}


</style>