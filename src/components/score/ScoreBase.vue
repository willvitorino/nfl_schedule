<script setup lang="ts">
import type { TeamGameInfo } from "@/model/store/types/team_game_info"

defineProps<{
  homeTeam: TeamGameInfo,
  awayTeam: TeamGameInfo
}>()
</script>

<template>
  <el-space
      class="score-container"
      direction="horizontal"
  >
    <div class="score-container__item el-input el-input-group el-input-group--append">
      <div class="el-input__wrapper">
        {{ awayTeam.name }}
      </div>

      <div class="el-input-group__append">
        {{ awayTeam.score }}
      </div>
    </div>

    <div class="score-container__item el-input el-input-group el-input-group--prepend">
      <div class="el-input-group__prepend">
        {{ homeTeam.score }}
      </div>

      <div class="el-input__wrapper">
        {{ homeTeam.name }}
      </div>
    </div>
  </el-space>
</template>

<style lang="scss">
.score-container {
  display: flex;

  .el-space__item {
    flex: 1;
  }
}
</style>
