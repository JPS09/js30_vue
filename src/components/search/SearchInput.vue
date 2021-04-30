<template>
  <div class="search-container">
    <input
      v-model="searchData"
      class="input"
      type="text"
      placeholder="Search for a day"
      @keyup.enter="filterDays"
    />
    <font-awesome-icon icon="search" class="searchIcon" @click="filterDays" />
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
.search-container {
  display: grid;
  grid-template-columns: 4fr 1fr;
  width: 20em;
}

.searchIcon {
  grid-row: 1;
  grid-column: 2;
  z-index: 2;
  cursor: pointer;
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
