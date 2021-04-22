<template>
  <div class="home">
    <base-dialog
      title="Are you sure?"
      details="This action cannot be undone"
      :display="askConfirm"
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
