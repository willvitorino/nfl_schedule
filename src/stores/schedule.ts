import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Schedule } from '@/model/store/types/schedule'

export const useSchedulesStore = defineStore('schedules', () => {
  // State
  const schedules: Ref<Array<Schedule>> = ref([])

  // Getters
  const getSchedules = computed(() => schedules)

  // Actions
  function setSchedules (data:Array<Schedule>) {
    schedules.value = data
  }

  return { schedules, getSchedules, setSchedules }
})
