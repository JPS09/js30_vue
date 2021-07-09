<script
  type="text/javascript"
  src="https://www.cornify.com/js/cornify.js"
></script>

<script>
const pressed = [];
const notTelling = "vuejs";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-notTelling.length - 1, pressed.length - notTelling.length);
  if (pressed.join("").includes(notTelling)) {
    cornify_add();
  }
});
</script>
