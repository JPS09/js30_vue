<template>
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas</title>
  </head>
  <body>
    <canvas
      id="draw"
      width="800"
      height="800"
      ref="drawingCanvas"
      @mousemove="draw($event)"
    ></canvas>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isDrawing: false,
      colorHue: "",
      strokeSize: "",
      switchSize: false,
      lastX: 0,
      lastY: 0,
    };
  },
  methods: {
    stroke(event) {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
    },
    userDrawing(event) {
      const ctx = this.$refs.drawingCanvas.getContext("2d");
      // prevent this function from running if not drawing
      if (!this.isDrawing) return;
      console.log(event);
      ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      ctx.lineWidth = this.strokeSize;

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
      const ctx = this.$refs.drawingCanvas.getContext("2d");

      // Set the size according to the visible screen
      this.$refs.drawingCanvas.width = window.innerWidth;
      this.$refs.drawingCanvas.height = window.innerHeight;

      // Set the stroke style and size and rounds it up
      ctx.strokeStyle = "#BADA55";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 100;

      // Blend modes
      ctx.globalCompositeOperation = "overlay";

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
