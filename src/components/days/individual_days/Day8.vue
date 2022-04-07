<template>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas</title>
  </head>
  <body>
    <p class="mobile">Doesn't work on mobile</p>
    <canvas
      id="draw"
      width="800"
      height="800"
      ref="drawingCanvas"
      @mousemove="userDrawing($event)"
      @click="userDrawing($event)"
      @mousedown="userStroke($event)"
      @mouseup="this.isDrawing = false"
      @mouseleave="this.isDrawing = false"
    ></canvas>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isDrawing: false,
      colorHue: "#458b51",
      strokeSize: "",
      switchSize: false,
      lastX: 0,
      lastY: 0,
    };
  },
  methods: {
    userStroke(event) {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
    },
    userDrawing(event) {
      const ctx = this.$refs.drawingCanvas.getContext("2d");
      // prevent this function from running if not drawing
      if (!this.isDrawing) return;
      ctx.lineWidth = this.strokeSize;
      ctx.strokeStyle = this.colorHue;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 100;
      ctx.globalCompositeOperation = "overlay";

      // Initialise the path
      ctx.beginPath();

      // Start from
      ctx.moveTo(this.lastX, this.lastY);

      // Go to
      ctx.lineTo(event.offsetX, event.offsetY);

      // Make the stroke visible
      ctx.stroke();

      // Destructuring to allow update of variables
      [this.lastX, this.lastY] = [event.offsetX, event.offsetY];

      // Allows for dynamic hue change
      this.hue++;
      if (this.hue >= 360) {
        this.hue = 0;
      }

      // Check if the stroke size is equal to one of the extrem to change a flag
      if (this.strokeSize >= 100 || this.strokeSize <= 1) {
        this.switchSize = !this.switchSize;
      }

      // Increase or decrease the size depending on which extreme has been met
      if (this.switchSize) {
        this.strokeSize++;
      } else {
        this.strokeSize--;
      }
    },
    handleCanvas() {
      // Set the size according to the visible screen
      // this.$refs.drawingCanvas.width = window.innerWidth;
      // this.$refs.drawingCanvas.height = window.innerHeight;
      // Set the stroke style and size and rounds it up
      // Blend modes
      // Is a flag to prevent drawing when the user is only hovering
      // let isDrawing = false;
      // // get the starting and end position to be able to draw
      // let lastX = 0;
      // let lastY = 0;
      // // variable to play with the hue of the stroke
      // let hue = 0;
      // let strokeSize = 1;
      // let switchSize = false;
      // Change the isDrawing variable to true and updates the coordinates
      // listening to the mousemove to get the positions
      // canvas.addEventListener("mousemove", draw);
      // // Do the drawing magic
      // canvas.addEventListener("mousedown", stroke);
      // // Changing the isDrawing variable to false when click stops and when leaving the canvas
      // canvas.addEventListener("mouseup", () => (isDrawing = false));
      // canvas.addEventListener("mouseout", () => (isDrawing = false));
    },
  },
};
// Get the canvas context to draw on
// Select the canvas
</script>

<style scoped>
#draw {
  width: 100%;
}
.mobile {
  display: none;
}
@media screen and (max-width: 960px) {
  .mobile {
    display: block;
  }
}
</style>
