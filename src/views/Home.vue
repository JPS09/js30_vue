<template>
  <div class="home">
    <base-dialog
      title="Are you sure?"
      details="This action cannot be undone"
      :display="askConfirm"
      @close="closeDialog"
    ></base-dialog>
    <viewing-completion></viewing-completion>
    <base-button>Check All</base-button>
    <base-button>Clear All</base-button>
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
    closeDialog() {
      this.askConfirm = false;
    },
  },
};
</script>
