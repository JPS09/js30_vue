<template>
  <input class="input" type="text" placeholder="Search for a day" />
  <font-awesome-icon icon="search"></font-awesome-icon>
</template>

<script>
export default {};
</script>

<style scoped>
.input {
  border-radius: 30px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.7em;
  width: 20em;
}

.input:focus {
  outline: none;
}
</style>
