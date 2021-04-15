<template>
  <button><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 30px;
  width: 20vw;
  height: 4vh;
  min-width: 100px;
  cursor: pointer;
  margin: 1rem;
}
</style>
