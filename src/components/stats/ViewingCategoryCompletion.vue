<template>
  <stats-styling-wrapper>
    <h3 id="viewing-category-completion__viewing-title">Viewing Stats</h3>
    <viewing-category-item categoryName="test"></viewing-category-item>
    <viewing-category-item categoryName="test 1"></viewing-category-item>
    <viewing-category-item categoryName="test 2 "></viewing-category-item>
    <viewing-category-item categoryName="test 3"></viewing-category-item>
    <viewing-category-item categoryName="test 4"></viewing-category-item>
    <viewing-category-item categoryName="test 5"></viewing-category-item>
  </stats-styling-wrapper>
</template>

<script>
import StatsStylingWrapper from "./StatsStylingWrapper";
import ViewingCategoryItem from "./ViewingCategoryItem";
export default {
  components: {
    ViewingCategoryItem,
    StatsStylingWrapper,
  },
};
</script>
