<template>
  <MainContainer/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const MainContainer = defineAsyncComponent(() => import('@/MainContainer.vue'))
</script>
