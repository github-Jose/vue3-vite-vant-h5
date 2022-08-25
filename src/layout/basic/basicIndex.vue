<template>
  <van-nav-bar
    :title="$route.meta.title"
    left-text="返回"
    right-text="按钮"
    :left-arrow="false"
    fixed
    :placeholder="true"
  />

  <div class="main-page">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.path" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>

  <van-tabbar v-model="active" route>
    <van-tabbar-item
      name="home"
      icon="home-o"
      v-for="item in tabItem"
      :key="item.key"
      replace
      :to="'/' + item.key"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref<number>(0)

const tabItem = [
  { key: 'home', icon: 'home-o', name: '首页' },
  { key: 'search', icon: 'search', name: '探索' },
  { key: 'setting', icon: 'setting-o', name: '设置' },
  { key: 'personalCenter', icon: 'friends-o', name: '个人中心' }
]

onMounted(() => {
  active.value = tabItem.findIndex(
    (item) => item.key === router.currentRoute.value.path.replace('/', '')
  )
})
</script>
