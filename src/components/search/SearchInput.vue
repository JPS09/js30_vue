<template>
  <div class="search-input__container">
    <input
      v-model="searchData"
      class="search-input"
      type="text"
      placeholder="Search for a day"
      @keyup.enter="filterDays"
    />
    <font-awesome-icon
      icon="search"
      class="search-input__search-icon"
      @click="filterDays"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    filterDays() {
      //filter the list of days or send to found day
      console.log("Fine for me");
    },
  },
};
</script>

<style scoped>
.search-input__container {
  display: grid;
  grid-template-columns: 27em 1em;
  width: fit-content;
}

.search-input__search-icon {
  grid-row: 1;
  grid-column: 2/3;
  align-self: center;
  z-index: 2;
  cursor: pointer;
}
.search-input {
  border-radius: 30px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.7em;
  width: 34em;
  grid-row: 1;
  grid-column: 1;
}

.search-input:focus {
  outline: none;
}

@media (max-width: 768px) {
  .search-input {
    width: 16em;
  }
  .search-input__container {
    grid-template-columns: 12em 1em;
  }
}
</style>
