<script setup>

import Meals from "@/components/meals/Meals.vue";
import FilterBar from "@/components/filterBar/FilterBar.vue";
import Cart from "@/components/cart/Cart.vue"
import {ref} from "vue";

import { useMealsStore} from "@/store/mealsStore.js";
import { storeToRefs } from 'pinia'
const mealsStore = useMealsStore()
const {filterData} = storeToRefs(mealsStore)


const isShowDetails = ref(false)
const toDetails = () => {
  isShowDetails.value = true
}
const hideDetail = () => {
  isShowDetails.value = false
}

</script>

<template>

  <FilterBar></FilterBar>
  <Meals :meals="filterData"></Meals>
  <Cart @to-pay="toDetails" @hide="hideDetail" :is-show="isShowDetails"></Cart>

</template>

<style scoped>

</style>
