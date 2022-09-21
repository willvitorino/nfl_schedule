<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>
          {{ schedule.shortName }}
        </span>

        <el-button text>
          {{ schedule.date }}
        </el-button>
      </div>
    </template>
    <div></div>
  </el-card>
</template>

<script setup lang="ts">
  import type { Schedule } from '@/model/store/types/schedule';

  const props = defineProps<{
    schedule: Schedule
  }>()

  console.log('props', props.schedule)
</script>
