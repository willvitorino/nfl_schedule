<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'

  import type { Schedule } from "@/model/store/types/schedule"

  import { Place } from '@element-plus/icons-vue'

  const ScoreBase = defineAsyncComponent(() => import('@/components/score/ScoreBase.vue'))

  defineProps<{
    schedule: Schedule
  }>()
</script>

<template>
  <el-space
    class="game-card__body"
    alignment="center"
    direction="vertical"
    fill
    wrap
  >
    <el-button
      :icon="Place"
      round
    >
      {{ schedule.venue }}
    </el-button>

    <ScoreBase
      :homeTeam="schedule.homeTeam"
      :awayTeam="schedule.awayTeam"
    />
  </el-space>
</template>

<style lang="scss" scoped>
.game-card__body {
  display: flex;
  justify-content: center;
}
</style>
