<template>
  <div class="test">
    home
    <div class="text-child">child</div>
  </div>
  <div class="counter">{{ useStore.count }}</div>
  <button @click="useStore.increment">+1</button>
</template>

<script lang="ts" setup name="HomePage">
import { useCounterStore } from '/@/store/module/userStore'

const useStore = useCounterStore()
console.log(useStore.count)
</script>

<style lang="scss" scoped>
.test {
  width: 300px;
  height: 300px;
  background-color: #000;
  color: #fff;
  font-size: 30px;
  .text-child {
    background-color: red;
    width: 100px;
    height: 100px;
    color: #000;
    font-size: 20px;
  }
}
</style>
