<template>
  <teleport to="body">
    <dialog open>
      <header>
        <slot name="header"> {{ title }}</slot>
      </header>
      <section>
        <slot>{{ details }}</slot>
      </section>
      <menu>
        <base-button>Yes I am sure</base-button>
        <base-button>No I am not</base-button>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  z-index: 100;
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 80%;
}
header {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 5vh;
  background: #35495e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
