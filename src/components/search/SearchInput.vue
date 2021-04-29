<template>
  <div class="search-container">
    <input class="input" type="text" placeholder="Search for a day" />
    <font-awesome-icon icon="search" class="searchIcon" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-container {
  display: grid;
  grid-template-columns: 4fr 1fr;
  width: 20em;
}

.searchIcon {
  grid-row: 1;
  grid-column: 2;
  z-index: 2;
}
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
