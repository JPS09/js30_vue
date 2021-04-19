<template>
  <div class="home">
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
