<template>
  <div class="icon-text">
    <div class="icon-text__icon">
      <slot name="icon"></slot>
    </div>

    <div class="icon-text__text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.icon-text {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--vt-c-white-mute);

  .icon-text__icon {
    height: 1em;
    display: flex;

    svg {
      height: 1em !important;
    }
  }

  .icon-text__text {
    line-height: 1em;
    font-size: 1em;
    height: 1em;
  }
}
</style>