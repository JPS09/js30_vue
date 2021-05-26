<template>
  <base-card>
    <h3 id="viewing-category-completion__viewing-title">Viewing Stats</h3>
    <viewing-category-item categoryName="test"></viewing-category-item>
    <viewing-category-item categoryName="test 1"></viewing-category-item>
    <viewing-category-item categoryName="test 2 "></viewing-category-item>
    <viewing-category-item categoryName="test 3"></viewing-category-item>
    <viewing-category-item categoryName="test 4"></viewing-category-item>
    <viewing-category-item categoryName="test 5"></viewing-category-item>
  </base-card>
</template>

<script>
import ViewingCategoryItem from "./ViewingCategoryItem";
export default {
  components: {
    ViewingCategoryItem,
  },
};
</script>

<style scoped>
#viewing-category-completion__viewing-title {
  padding: 1em;
}
</style>
