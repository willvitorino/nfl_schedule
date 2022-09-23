<script setup lang="ts">
  import { computed } from 'vue'

  // Type of property Schedule.
  import type { Schedule } from '@/model/store/types/schedule'

  // Date formatter
  import { format } from 'date-fns'
  import { ptBR } from 'date-fns/locale'

  import { Calendar } from '@element-plus/icons-vue'

  const props = defineProps<{
    schedule: Schedule
  }>()

  const gameDate = computed(() => format(new Date(props.schedule.date), `dd/MM/yyyy 'às' HH:mm`, { locale: ptBR }))
</script>

<template>
  <el-space
    direction="vertical"
    class="game-card__header"
  >
    <h2>
      {{ schedule.shortName }}
    </h2>

    <el-button
      :icon="Calendar"
      type="info"
      round
    >
      {{ gameDate }}
    </el-button>
  </el-space>
</template>

<style lang="scss" scoped>
.game-card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
