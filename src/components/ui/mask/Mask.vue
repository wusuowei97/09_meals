<script setup>
const props = defineProps(["isShow"])
const emits = defineEmits(["hide"])

const close = () => {
  emits("hide")
}

</script>

<template>
  <Teleport to="body" v-if="props.isShow">
    <div class="mask" @click.self="close">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, .5);
  z-index: 9999;
}

</style>