<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  // Type of property Schedule.
  import type { Schedule } from '@/model/store/types/schedule'

  // CardHeaderComponent
  const CardHeader = defineAsyncComponent(() => import('./partials/CardHeader.vue'))
  const CardBody = defineAsyncComponent(() => import('./partials/CardBody.vue'))

  defineProps<{ schedule: Schedule }>()
</script>

<template>
  <el-card
      shadow="hover"
      class="game-card"
  >
    <template #header>
      <CardHeader :schedule="schedule" />
    </template>

    <CardBody :schedule="schedule" />
  </el-card>
</template>

<style lang="scss">
.game-card {
  flex-grow: 1;

  background-color: var(--vt-c-black-soft);
  border-color: var(--el-border-color);
  border-radius: var(--el-border-radius-round);
}
</style>
