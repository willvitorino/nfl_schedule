<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'

  // Type of property Schedule.
  import type { Schedule } from '@/model/store/types/schedule'

  // Date formatter
  import { format } from 'date-fns'
  import { ptBR } from 'date-fns/locale'

  import { Calendar, Clock } from '@element-plus/icons-vue'

  const IconText = defineAsyncComponent(() => import('@/components/iconText/IconTextBase.vue'))

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
      <span class="game-card__header__name">
        {{ schedule.shortName }}
      </span>

      <IconText class="game-card__header__clock">
        <template #icon>
          <Clock />
        </template>

        <template #text>
          {{ gameDate }}
        </template>
      </IconText>
    </h2>

    <h3>
      <IconText class="game-card__header__clock">
        <template #icon>
          <Calendar />
        </template>

        <template #text>
          {{ schedule.name }}
        </template>
      </IconText>
    </h3>
  </el-space>
</template>

<style lang="scss">
.game-card__header {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .el-space__item {
    display: flex;
    width: 100%;
    padding: 0 !important;

    h2 {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      color: var(--vt-c-white-mute);
    }

    h3 {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
