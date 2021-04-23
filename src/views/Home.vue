<template>
  <div class="home">
    <base-dialog
      dialog-title="Are you sure?"
      dialog-details="This action cannot be undone"
      :dialog-display="askConfirm"
      @close="closeDialogConfirm"
    ></base-dialog>
    <viewing-completion></viewing-completion>
    <base-button @click="openDialogConfirm">Check All</base-button>
    <base-button @click="openDialogConfirm">Clear All</base-button>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewingCompletion from "@/components/stats/ViewingCompletion.vue";

export default {
  name: "Home",
  components: {
    ViewingCompletion,
  },
  data() {
    return {
      askConfirm: false,
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
