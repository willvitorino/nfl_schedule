<script setup lang="ts">
import { watch, defineAsyncComponent } from 'vue'
import { useAxios } from '@vue-composable/axios'

// Store
import { useSchedulesStore } from '@/stores/schedule'

// Componentes
const GameCard = defineAsyncComponent(() => import('@/components/gameCard/GameCard.vue'))

const { exec, loading, result } = useAxios({})
const { getSchedules: schedules, setSchedules } = useSchedulesStore()

watch(result, (response) => {
  setSchedules(response?.data?.data)
})

exec({
  method: 'GET',
  url: 'https://nfl-schedule.p.rapidapi.com/v1/schedules',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com'
  }
})

</script>

<template>
  <section
      v-loading="loading"
      class="schedule-container"
  >
    <GameCard
        v-for="(schedule, scheduleIndex) in schedules"
        :key="scheduleIndex"
        :schedule="schedule"
        class="schedule-container__card"
    />
  </section>
</template>

<style lang="scss" scoped>
.schedule-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  justify-content: space-around;
}
</style>
