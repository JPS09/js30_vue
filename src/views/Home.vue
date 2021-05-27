<template>
  <div class="home">
    <base-dialog
      dialog-header="Are you sure?"
      dialog-details="This action cannot be undone"
      :dialog-display="askConfirm"
      @close="closeDialogConfirm"
    ></base-dialog>
    <search-dialog
      :dialogDisplay="displayVoiceDialog"
      @close="closeVoiceDialog"
    ></search-dialog>
    <div class="search-elements">
      <search-input></search-input>
      <search-button @click="openVoiceDialog"></search-button>
    </div>
    <viewing-completion></viewing-completion>
    <viewing-category-completion></viewing-category-completion>
    <base-card>
      <section class="home-view__lower-section">
        <div id="home-view__select-placement">
          <search-filter></search-filter>
        </div>
        <menu class="home-view__menu">
          <base-button @click="openDialogConfirm">Check All</base-button>
          <base-button @click="openDialogConfirm">Clear All</base-button>
        </menu>
      </section>
    </base-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewingCompletion from "@/components/stats/ViewingCompletion.vue";
import ViewingCategoryCompletion from "@/components/stats/ViewingCategoryCompletion.vue";
import SearchInput from "@/components/search/SearchInput.vue";
import SearchButton from "@/components/search/SearchButton.vue";
import SearchFilter from "@/components/search/SearchFilter.vue";
import SearchDialog from "@/components/search/SearchDialog.vue";

export default {
  name: "Home",
  components: {
    ViewingCompletion,
    ViewingCategoryCompletion,
    SearchInput,
    SearchButton,
    SearchFilter,
    SearchDialog,
  },
  data() {
    return {
      askConfirm: false,
      displayVoiceDialog: false,
    };
  },
  methods: {
    openVoiceDialog() {
      this.displayVoiceDialog = true;
    },
    closeVoiceDialog() {
      this.displayVoiceDialog = false;
    },
    openDialogConfirm() {
      this.askConfirm = true;
    },
    closeDialogConfirm() {
      this.askConfirm = false;
    },
  },
};
</script>

<style scoped>
.search-elements {
  display: flex;
  justify-content: space-between;
}

.home-view__menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  margin: 0;
}

/* .home-view__lower-section {
  display: inline-flex;
} */

#home-view__select-placement {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1em;
}
</style>
