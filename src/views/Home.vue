<template>
  <div class="home">
    <base-dialog
      title="Are you sure?"
      details="This action cannot be undone"
      :display="askConfirm"
      @close="closeDialog"
    ></base-dialog>
    <viewing-completion></viewing-completion>
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
};
</script>
