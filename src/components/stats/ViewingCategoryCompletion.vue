<template>
  <stats-styling-wrapper>
    <h3 id="viewing-category-completion__viewing-title">Viewing Stats</h3>
    <viewing-category-item categoryName="Basics"></viewing-category-item>
    <viewing-category-item categoryName="Tips"></viewing-category-item>
    <viewing-category-item categoryName="Fun"></viewing-category-item>
    <viewing-category-item categoryName="Nav"></viewing-category-item>
    <h1>{{ basicStatsTest }}</h1>
  </stats-styling-wrapper>
</template>

<script>
import StatsStylingWrapper from "./StatsStylingWrapper";
import ViewingCategoryItem from "./ViewingCategoryItem";
export default {
  data() {
    return {
      basicStatsTest: this.$store.getters["stats/basicsStats"],
    };
  },
  components: {
    ViewingCategoryItem,
    StatsStylingWrapper,
  },
  computed: {
    basicStats() {
      console.log("test basics", this.$store.getters["stats/basicsStats"]);
      return this.$store.getters["stats/basicsStats"];
    },
    funStats() {
      return this.$store.getters["stats/funStats"];
    },
    navStats() {
      return this.$store.getters["stats/navStats"];
    },
    tipsStats() {
      return this.$store.getters["stats/tipsStats"];
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
