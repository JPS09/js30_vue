<template>
  <div class="photobooth">
    <div class="controls">
      <button onClick="takePhoto()">Take Photo</button>
      <!--       <div class="rgb">
        <label for="rmin">Red Min:</label>
        <input type="range" min=0 max=255 name="rmin">
        <label for="rmax">Red Max:</label>
        <input type="range" min=0 max=255 name="rmax">

        <br>

        <label for="gmin">Green Min:</label>
        <input type="range" min=0 max=255 name="gmin">
        <label for="gmax">Green Max:</label>
        <input type="range" min=0 max=255 name="gmax">

        <br>

        <label for="bmin">Blue Min:</label>
        <input type="range" min=0 max=255 name="bmin">
        <label for="bmax">Blue Max:</label>
        <input type="range" min=0 max=255 name="bmax">
      </div> -->
    </div>

    <canvas class="photo"></canvas>
    <video class="player"></video>
    <div class="strip"></div>

    <audio class="snap" src="./snap.mp3" hidden></audio>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);

      // DEPRECATED
      // video.src = window.URL.createObjectURL(localMediaStream)

      // New Syntax
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Adjust the canvas size to the webcam video stream and put that stream into the canvas
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // get the pixels
    let pixels = ctx.getImageData(0, 0, width, height);

    // Red Effect
    // pixels = redEffect(pixels);

    // Stroboscopic effect with opacity of old frames
    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.1;

    // Green screen
    //pixels = greenScreen(pixels)

    // Put the pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // Defines the format of the image
  const data = canvas.toDataURL("image/png");
  //Creating a clickable link for download
  const link = document.createElement("a");
  link.href = data;
  // Making it downloadable
  link.setAttribute("download", "test");
  link.textContent = "Download your face";
  link.innerHTML = `<img src="${data}" alt="You"/>`;
  // Insert it below the canvas
  strip.insertBefore(link, strip.firstChild);
}

// Red overlay
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

// RGB split
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 200] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 350] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

// Green screen effect
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
// Get the video stream from the webcam
getVideo();
// When the stream is ready, execute the paintToCanvas function
video.addEventListener("canplay", paintToCanvas);
</script>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-size: 10px;
  background: #ffc600;
}

.photobooth {
  background: white;
  max-width: 150rem;
  margin: 2rem auto;
  border-radius: 2px;
}

/*clearfix*/
.photobooth:after {
  content: "";
  display: block;
  clear: both;
}

.photo {
  width: 100%;
  float: left;
}

.player {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 200px;
}

/*
  Strip!
*/

.strip {
  padding: 2rem;
}

.strip img {
  width: 100px;
  overflow-x: scroll;
  padding: 0.8rem 0.8rem 2.5rem 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background: white;
}

.strip a:nth-child(5n + 1) img {
  transform: rotate(10deg);
}
.strip a:nth-child(5n + 2) img {
  transform: rotate(-2deg);
}
.strip a:nth-child(5n + 3) img {
  transform: rotate(8deg);
}
.strip a:nth-child(5n + 4) img {
  transform: rotate(-11deg);
}
.strip a:nth-child(5n + 5) img {
  transform: rotate(12deg);
}
</style>
