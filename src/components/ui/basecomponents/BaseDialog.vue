<template>
  <teleport to="body">
    <div
      v-if="dialogDisplay"
      class="base-dialog__backdrop"
      @click="closeDialog"
    ></div>
    <dialog class="base-dialog" open v-if="dialogDisplay">
      <header class="base-dialog__header" v-if="!voiceDialog">
        <h2>{{ dialogHeader }}</h2>
      </header>
      <slot v-else name="closeIcon"></slot>
      <section class="base-dialog__section">
        <slot name="voiceMic"></slot>
      </section>
      <section class="base-dialog__section" v-if="!voiceDialog">
        <h5 class="base-dialog__details">
          {{ dialogDetails }}
        </h5>
      </section>
      <slot v-else name="voiceText"></slot>
      <menu class="base-dialog__menu" v-if="!voiceDialog">
        <base-button @click="closeDialog">Yes I am sure</base-button>
        <base-button @click="closeDialog">No I am not</base-button>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    dialogHeader: {
      type: String,
      required: false,
    },
    dialogDetails: {
      type: String,
      required: false,
    },
    dialogDisplay: {
      type: Boolean,
      required: true,
    },
    voiceDialog: {
      type: Boolean,
      required: false,
      default: false,
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
.base-dialog__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.base-dialog {
  position: fixed;
  top: 20vh;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  font-family: "Roboto";
}
.base-dialog__header {
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

.base-dialog__section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.base-dialog__menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 1.5rem;
}

.base-dialog__details {
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
}

@media (min-width: 768px) {
  .base-dialog {
    width: 40%;
  }
}
</style>
