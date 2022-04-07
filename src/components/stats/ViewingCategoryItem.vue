<template>
  <div class="viewing-category-item">
    <p id="viewing-category__name">{{ categoryName }}</p>
    <div class="viewing-category-item__slot">
      <div
        v-if="categoryStats > 0"
        class="viewing-category-item__fill"
        :style="{ width: categoryStats + '%' }"
      >
        <div class="viewing-category-item__fill__done">
          {{ categoryStats }}%
        </div>
      </div>
      <div class="viewing-category-item_empty" v-else-if="categoryStats === 0">
        0%
      </div>
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
    categoryStats: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.viewing-category-item {
  display: grid;
  grid-template-columns: 1.2fr 3.5fr;
  align-items: center;
  justify-content: space-between;
  padding: 0.75em 0;
  text-align: left;
}
@media screen and (max-width: 960px) {
  .viewing-category-item {
    display: unset;
    padding: 0.5em 0;
    text-align: left;
  }
}
.viewing-category-item__slot,
.viewing-category-item__fill {
  width: 100%;
  background: rgba(136, 211, 155, 0.705);
  height: 1.2em;
  border-radius: 25px;
}
.viewing-category-item__fill {
  background: rgba(15, 151, 49, 0.705);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: width 2s ease-in-out;
}

.viewing-category-item__fill__done {
  color: white;
  font-size: 75%;
  text-align: right;
  font-weight: 700;
}

.viewing-category-item_empty {
  color: white;
  text-shadow: rgba(0, 0, 0, 0.8);
  font-size: 100%;
  font-weight: 700;
  padding: 0em 0.5em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#viewing-category__name {
  font-weight: 500;
  align-self: flex-end;
  margin: 0;
}
</style>
