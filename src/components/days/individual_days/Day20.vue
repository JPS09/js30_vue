<template>
  <p>
    Only works on Chrome since this feature has been marked as obsolete in
    Firefox
  </p>
  <div class="words" contenteditable></div>
</template>

<script>
export default {
  mounted() {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.start();
  },
  methods: {
    start() {
      // Allows for use across browser, first one is Firefox, second one is Chrome
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      //Creating an instance of SpeechRecognition
      /* eslint-disable no-undef */
      const recognition = new SpeechRecognition();
      // Allows us to get the result immediately instead of waiting for the end of the audio input
      recognition.interimResults = true;

      // Create a paragraph to be displayed in the DOM
      let p = document.createElement("p");
      const words = document.querySelector(".words");
      words.appendChild(p);

      //When the results are available, dig into the event to get the first one and change the paragraph content according to it
      recognition.addEventListener("result", (e) => {
        const transcript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        p.textContent = transcript;

        // When the user starts speaking again create a new paragraph instead of rewriting the existing one
        if (e.results[0].isFinal) {
          p = document.createElement("p");
          words.appendChild(p);
        }
      });
      //Start on page load
      recognition.start();

      // When the previous detection end, start the recognition again
      recognition.addEventListener("end", recognition.start);
    },
  },
};
// /* eslint-disable no-undef */
// // Allows for use across browser, first one is Firefox, second one is Chrome
// // window.SpeechRecognition =
// //   window.SpeechRecognition || window.webkitSpeechRecognition;

// //Creating an instance of SpeechRecognition
// const recognition = new SpeechRecognition();
// // Allows us to get the result immediately instead of waiting for the end of the audio input
// recognition.interimResults = true;

// // Create a paragraph to be displayed in the DOM
// let p = document.createElement("p");
// const words = document.querySelector(".words");
// words.appendChild(p);

// //When the results are available, dig into the event to get the first one and change the paragraph content according to it
// recognition.addEventListener("result", (e) => {
//   const transcript = Array.from(e.results)
//     .map((result) => result[0])
//     .map((result) => result.transcript)
//     .join("");
//   p.textContent = transcript;

//   // When the user starts speaking again create a new paragraph instead of rewriting the existing one
//   if (e.results[0].isFinal) {
//     p = document.createElement("p");
//     words.appendChild(p);
//   }
// });
// //Start on page load
// recognition.start();

// // When the previous detection end, start the recognition again
// recognition.addEventListener("end", recognition.start);
</script>

<style>
.words {
  max-width: 500px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem 1rem 5rem;
  background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(#d9eaf3),
      color-stop(4%, #fff)
    )
    0 4px;
  background-size: 100% 3rem;
  position: relative;
  line-height: 3rem;
}

p {
  margin: 0 0 3rem;
}

.words:before {
  content: "";
  position: absolute;
  width: 4px;
  top: 0;
  left: 30px;
  bottom: 0;
  border: 1px solid;
  border-color: transparent #efe4e4;
}
</style>
