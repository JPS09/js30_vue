<template>
  <div class="day-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.day-wrapper {
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: rgb(255, 255, 255);
  width: 23em;
  padding-bottom: 1em;
}

@media screen and (max-width: 960px) {
  .day-wrapper {
    width: 90vw;
    margin-bottom: 0.8em;
  }
}
</style>
