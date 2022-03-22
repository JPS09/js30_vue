<template>
  <div><p>Try typing VueJS on your keyboard</p></div>
</template>
<script>
export default {
  created() {
    window.addEventListener("keyup", this.secretMessage);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.secretMessage);
    // eslint-disable-next-line no-undef
    cornify_click_cupcake_button();
  },
  mounted() {
    // Needed to append the script element when created and to make the whole thing work. ( Cannot be two sciprt tags inside one component)
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "https://www.cornify.com/js/cornify.js");
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  data() {
    return {
      pressed: [],
      notTelling: "vuejs",
    };
  },
  methods: {
    secretMessage(event) {
      this.pressed.push(event.key);
      this.pressed.splice(
        -this.notTelling.length - 1,
        this.pressed.length - this.notTelling.length
      );
      if (this.pressed.join("").includes(this.notTelling)) {
        // eslint-disable-next-line no-undef
        cornify_add();
        console.log("oh");
      }
    },
  },
};

// const pressed = [];
// const notTelling = "vuejs";

// window.addEventListener("keyup", (e) => {
//   pressed.push(e.key);
//   pressed.splice(-notTelling.length - 1, pressed.length - notTelling.length);
//   if (pressed.join("").includes(notTelling)) {
//     // cornify_add();
//   }
// });
</script>
