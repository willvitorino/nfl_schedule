<template>
  <el-container class="app-container">
    <el-header class="app-container__header">
      <h1>NFL Schedule</h1>
    </el-header>

    <el-main class="app-container__main">
      <RouterView v-slot="{ Component }">
        <transition>
          <component :is="Component"/>
        </transition>
      </RouterView>
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
 import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .app-container__header {
    text-align: center;
  }
}
</style>