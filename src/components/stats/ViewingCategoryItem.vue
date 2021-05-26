<template>
  <div class="viewing-category-item">
    <p id="viewing-category__name">{{ categoryName }}</p>
    <div class="viewing-category-item__slot">
      <div class="viewing-category-item__fill"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.viewing-category-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.viewing-category-item__slot {
  width: 25em;
  background: rgba(136, 211, 155, 0.705);
  padding: 0.5em;
  border-radius: 25px;
}
#viewing-category__name {
  font-weight: 500;
}
</style>
