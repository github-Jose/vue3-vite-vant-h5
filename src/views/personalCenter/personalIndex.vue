<template>
  <div>
    personalCenter
    <div>{{ userStore.count }}</div>
  </div>
</template>

<script lang="ts" setup name="personalCenter">
import { useCounterStore } from '/@/store/module/userStore'
const userStore = useCounterStore()
</script>
