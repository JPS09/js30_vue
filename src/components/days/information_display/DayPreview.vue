<template>
  <div class="day-preview__container">
    <h3>Preview</h3>
    <component :is="componentId"></component>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.day-preview__container {
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 25px;
  margin-top: 1em;
  grid-column: -3/-1;
}
</style>
