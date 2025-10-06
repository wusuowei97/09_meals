<script setup>

import Meal from "@/components/meals/meal/Meal.vue"
const props = defineProps(["meals"])

</script>

<template>
  <div class="meals">
      <Meal v-for="item in props.meals" :key="item.id" :meal="item"></Meal>
  </div>

</template>

<style scoped>
.meals {
  height: calc(100vh - 130rem);
  overflow: auto;
  padding-bottom: 180rem;
}
h1 {
  font-size: 30rem;
}
p {
  font-size: 100rem;
}

</style>