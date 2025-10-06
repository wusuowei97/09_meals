<script setup>
import Mask from '@/components/ui/mask/Mask.vue'
const props = defineProps(["content"])
const emits = defineEmits(["hide", "ok"])

const close = () => {
  emits("hide")
}

const ok = () => {
  emits("ok")
}

</script>

<template>
  <Mask :="$attrs">

    <div class="dialog">

      <p class="content">
        <slot></slot>
      </p>

      <div class="button-group">
        <button @click="close" class="button-cancel">取消</button>
        <button @click="ok" class="button-ok">确认</button>
      </div>

    </div>

  </Mask>
</template>

<style scoped>
.dialog {
  width: 600rem;
  height: 300rem;
  background-color: #fff;
  border-radius: 40rem;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

}

.content {
  font-size: 35rem;
  text-align: center;
  line-height: 200rem;

}

.button-group {
  display: flex;
  justify-content: space-between;
  padding: 0 20rem 20rem;
}

.button-cancel, .button-ok {
  width: 250rem;
  height: 65rem;
  border: 1px solid #8e8e8e;
  border-radius: 60rem;
  background-color: white;
  color: #303030;
}

.button-ok {
  background-color: rgb(247, 187, 0);
  border: 1px solid rgb(247, 187, 0);
}

</style>