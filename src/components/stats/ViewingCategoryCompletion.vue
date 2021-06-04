<template>
  <stats-styling-wrapper>
    <h3 id="viewing-category-completion__viewing-title">Viewing Stats</h3>
    <div>
      <viewing-category-item categoryName="Basics"></viewing-category-item>
      <viewing-category-item categoryName="Tips"></viewing-category-item>
      <viewing-category-item categoryName="Fun"></viewing-category-item>
      <viewing-category-item categoryName="Nav"></viewing-category-item>
    </div>
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
