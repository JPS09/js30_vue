<template>
  <teleport to="body">
    <div v-if="dialogDisplay" class="backdrop" @click="closeDialog"></div>
    <dialog open v-if="dialogDisplay">
      <header>
        <h2>{{ dialogTitle }}</h2>
      </header>
      <section>
        <p>{{ dialogDetails }}</p>
      </section>
      <menu>
        <base-button @click="closeDialog">Yes I am sure</base-button>
        <base-button @click="closeDialog">No I am not</base-button>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    dialogTitle: {
      type: String,
      required: true,
    },
    dialogDetails: {
      type: String,
      required: true,
    },
    dialogDisplay: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
header {
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 4em;
  background: #458b51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
