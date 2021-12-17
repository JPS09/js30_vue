<template>
  <select name="days" id="search-filter__select">
    <option value="default">Filter the days</option>
    <option value="essentials">Essentials</option>
    <option value="tips">Tips</option>
    <option value="fun">Fun</option>
    <option value="nav">Nav</option>
  </select>
</template>

<style scoped>
#search-filter__select {
  border-radius: 10px;
  width: 150px;
  border-style: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  font-family: inherit;
  font-weight: 600;
  color: #1d9951;
  padding: 0.5em 1em;
}
#search-filter__select:hover {
  transition: all 0.2s ease-in-out;
  background: #41b883;
  color: white;
}
</style>
