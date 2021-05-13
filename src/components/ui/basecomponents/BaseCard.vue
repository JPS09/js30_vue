<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 40rem;
  margin: 2rem auto;
}
</style>
