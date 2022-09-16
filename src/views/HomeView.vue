<script setup>
  import { onMounted } from 'vue'
  import { useNFLScheduleStore } from '@/stores'

  const store = useNFLScheduleStore()

  onMounted(() => {
    store.getSchedule()
  })
</script>

<template>
  <main>
    {{ store.schedules }}
  </main>
</template>
