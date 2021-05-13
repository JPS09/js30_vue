<template>
  <div class="home">
    <base-dialog
      dialog-header="Are you sure?"
      dialog-details="This action cannot be undone"
      :dialog-display="askConfirm"
      @close="closeDialogConfirm"
    ></base-dialog>
    <search-dialog :dialogDisplay="openVoiceDialog"></search-dialog>
    <div class="search-elements">
      <search-input></search-input>
      <search-button></search-button>
    </div>
    <viewing-completion></viewing-completion>
    <base-button @click="openDialogConfirm">Check All</base-button>
    <base-button @click="openDialogConfirm">Clear All</base-button>
    <search-filter></search-filter>
    <day-card
      day-name="test"
      day-description=" Oh my test"
      day-number="64"
    ></day-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewingCompletion from "@/components/stats/ViewingCompletion.vue";
import SearchInput from "@/components/search/SearchInput.vue";
import SearchButton from "@/components/search/SearchButton.vue";
import SearchFilter from "@/components/search/SearchFilter.vue";
import SearchDialog from "@/components/search/SearchDialog.vue";
import DayCard from "@/components/days/DaysCard.vue";

export default {
  name: "Home",
  components: {
    ViewingCompletion,
    SearchInput,
    SearchButton,
    SearchFilter,
    DayCard,
    SearchDialog,
  },
  data() {
    return {
      askConfirm: false,
      openVoiceDialog: false,
    };
  },
  methods: {
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
  justify-content: space-around;
}
</style>
