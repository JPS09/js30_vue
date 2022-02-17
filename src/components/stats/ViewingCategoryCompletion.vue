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
  data() {
    return {
      navViewedStats: this.$store.getters["stats/navStats"],
      basicViewedStats: this.$store.getters["stats/basicsStats"],
      tipsViewedStats: this.$store.getters["stats/tipsStats"],
      funViewedStats: this.$store.getters["stats/funStats"],
    };
  },
  // created() {},
  // computed: {
  //   basicStats() {
  //     console.log(
  //       "Use a computed for this",
  //       this.$store.getters["stats/basicsStats"]
  //     );
  //     return this.$store.getters["stats/basicsStats"];
  //   },
  //   funStats() {
  //     return this.$store.getters["stats/funStats"];
  //   },
  //   navStats() {
  //     return this.$store.getters["stats/navStats"];
  //   },
  //   tipsStats() {
  //     return this.$store.getters["stats/tipsStats"];
  //   },
  // },
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
