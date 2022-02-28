<template>
  <stats-styling-wrapper>
    <h3 id="viewing-category-completion__viewing-title">Viewing Stats</h3>
    <viewing-category-item
      categoryName="Basics"
      :categoryStats="basicViewedStats"
    ></viewing-category-item>
    <viewing-category-item
      categoryName="Tips"
      :categoryStats="tipsViewedStats"
    ></viewing-category-item>
    <viewing-category-item
      categoryName="Fun"
      :categoryStats="funViewedStats"
    ></viewing-category-item>
    <viewing-category-item
      categoryName="Nav"
      :categoryStats="navViewedStats"
    ></viewing-category-item>
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
  computed: {
    navViewedStats() {
      return this.$store.getters["stats/navStats"];
    },
    basicViewedStats() {
      return this.$store.getters["stats/basicsStats"];
    },
    tipsViewedStats() {
      return this.$store.getters["stats/tipsStats"];
    },
    funViewedStats() {
      return this.$store.getters["stats/funStats"];
    },
  },
};
</script>

<style scoped>
#viewing-category-completion__viewing-title {
  padding: 0.3em;
  margin: 0;
}
@media screen and (max-width: 960px) {
  #viewing-category-completion__viewing-title {
    margin: 0;
    padding: 0.5em;
  }
}
</style>
