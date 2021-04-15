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
  color: #707070;
  border-radius: 30px;
  width: 20vw;
  height: 4vh;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  font-weight: 800;
}

button:hover {
  background: #458b51;
  color: white;
}
</style>
