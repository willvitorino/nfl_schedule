<script setup lang="ts">
  import { computed } from 'vue'

  // Type of property Schedule.
  import type { Schedule } from '@/model/store/types/schedule'

  // Date formatter
  import { format } from 'date-fns'
  import { ptBR } from 'date-fns/locale'

  const props = defineProps<{
    schedule: Schedule
  }>()

  const gameDate = computed(() => format(new Date(props.schedule.date), `dd/MM/yyyyy 'às' HH:mm`, { locale: ptBR }))
</script>

<template>
  <el-space
    direction="vertical"
    class="game-card__header"
  >
    <h2>
      {{ schedule.shortName }}
    </h2>

    <el-tag>
      {{ gameDate }}
    </el-tag>
  </el-space>
</template>

<style lang="scss" scoped>
.game-card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
