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
.viewing-category-item__slot,
.viewing-category-item__fill {
  width: 25em;
  background: rgba(136, 211, 155, 0.705);
  height: 1.3em;
  border-radius: 25px;
}
.viewing-category-item__fill {
  background: rgba(15, 151, 49, 0.705);
  width: 15em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.viewing-category-item__fill::after {
  content: "50%";
  color: white;
  padding-right: 0.5em;
}
#viewing-category__name {
  font-weight: 500;
}
</style>
