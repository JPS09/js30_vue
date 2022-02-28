<template>
  <div class="home">
    <!-- Add an @accept function to this event by findout what to do with payload -->
    <base-dialog
      dialog-header="Are you sure?"
      dialog-details="This action cannot be undone"
      :dialog-display="askConfirm"
      @close="closeDialogConfirm"
      @check_all_days="setAllTo('viewed')"
      @uncheck_all_days="setAllTo('not_viewed')"
      @refuse="closeDialogConfirm"
      :isCheckAll="isCheckAllBoolean"
    ></base-dialog>
    <search-dialog
      :dialogDisplay="displayVoiceDialog"
      @close="closeVoiceDialog"
    ></search-dialog>
    <div class="search-elements">
      <search-input></search-input>
      <search-button @click="openVoiceDialog"></search-button>
    </div>
    <section id="viewing-stats__section">
      <viewing-completion></viewing-completion>
      <viewing-category-completion></viewing-category-completion>
    </section>
    <base-card class="home-view__lower-section">
      <section>
        <div id="home-view__select-placement">
          <search-filter></search-filter>
        </div>
        <menu class="home-view__menu">
          <base-button @click="checkDialogConfirm">Check All</base-button>
          <base-button @click="clearDialogConfirm">Clear All</base-button>
        </menu>
      </section>
      <section class="home-view__days-container">
        <days-card
          v-for="day in days"
          :key="day.id"
          :day-number="day.dayNumber"
          :day-category="day.category"
          :day-name="day.name"
          :day-id="day.id"
          :day-sub-categories="day.subCategories"
        ></days-card>
      </section>
    </base-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import ViewingCompletion from "@/components/stats/ViewingCompletion.vue";
import ViewingCategoryCompletion from "@/components/stats/ViewingCategoryCompletion.vue";
import SearchInput from "@/components/search/SearchInput.vue";
import SearchButton from "@/components/search/SearchButton.vue";
import SearchFilter from "@/components/search/SearchFilter.vue";
import SearchDialog from "@/components/search/SearchDialog.vue";
import DaysCard from "@/components/days/information_display/DaysCard.vue";

export default {
  name: "Home",
  components: {
    ViewingCompletion,
    ViewingCategoryCompletion,
    SearchInput,
    SearchButton,
    SearchFilter,
    SearchDialog,
    DaysCard,
  },
  data() {
    return {
      askConfirm: false,
      displayVoiceDialog: false,
      isCheckAllBoolean: false,
    };
  },
  methods: {
    openVoiceDialog() {
      this.displayVoiceDialog = true;
    },
    closeVoiceDialog() {
      this.displayVoiceDialog = false;
    },
    checkDialogConfirm() {
      // same as below
      this.askConfirm = true;
      this.isCheckAllBoolean = true;
    },
    clearDialogConfirm() {
      // Need to pass the fact that is for clearing the viewed state to the dialog
      // Maybe through a parameter or something like that (povide inject maybe also ?)
      this.askConfirm = true;
      this.isCheckAllBoolean = false;
    },
    closeDialogConfirm() {
      this.askConfirm = false;
    },
    checkAllDays() {
      this.$store.commit("days/setAllTo", "viewed");
    },
    ...mapActions("days", ["setAllTo"]),
  },
  computed: {
    days() {
      return this.$store.getters["days/daysList"];
    },
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 2em 15em 1fr;
  justify-items: center;
  align-items: center;
}

@media screen and (max-width: 960px) {
  .home {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: unset;
  }
}
#viewing-stats__section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.search-elements {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.home-view__menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  margin: 0;
}

.home-view__lower-section {
  width: 100%;
}

#home-view__select-placement {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1em;
}

.home-view__days-container {
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media screen and (max-width: 960px) {
  .home-view__days-container {
    display: block;
  }
}

@media screen and (max-width: 1080px) {
  .home-view__lower-section {
    margin: 0 auto;
  }
}
</style>
