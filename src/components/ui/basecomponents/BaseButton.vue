<template>
  <button class="base-button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
.base-button {
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: #707070;
  border-radius: 30px;
  padding: 0.5em 1rem;
  max-width: 200px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  font-weight: 800;
}

.base-button:hover {
  background: #41b883;
  color: white;
}
</style>
