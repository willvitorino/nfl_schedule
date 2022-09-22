<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  // Type of property Schedule.
  import type { Schedule } from '@/model/store/types/schedule'

  // CardHeaderComponent
  const CardHeader = defineAsyncComponent(() => import('./partials/CardHeader.vue'))

  defineProps<{ schedule: Schedule }>()
</script>

<template>
  <el-card class="game-card">
    <template #header>
      <CardHeader :schedule="schedule" />
    </template>
    <div></div>
  </el-card>
</template>

<style lang="scss">
.game-card {
  flex-grow: 1;
}
</style>
