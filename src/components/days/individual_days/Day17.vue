<template>
  <div>
    <ul id="bands">
      <li v-for="band in sortedBands" :key="band">{{ band }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sortBands();
  },
  data() {
    return {
      bands: [
        "The Plot in You",
        "The Devil Wears Prada",
        "Pierce the Veil",
        "Norma Jean",
        "The Bled",
        "Say Anything",
        "The Midway State",
        "We Came as Romans",
        "Counterparts",
        "Oh, Sleeper",
        "A Skylit Drive",
        "Anywhere But Here",
        "An Old Dog",
      ],
      sortedBands: [],
    };
  },
  methods: {
    // Need to find a way to push data into the sortedbands array in a sorted way
    sortBands() {
      this.bands.sort((a, b) => {
        this.articleBanishment(a) > this.articleBanishment(b) ? 1 : -1;
      });
    },
    articleBanishment(bandName) {
      // Using Regex to remove articles on bands
      return bandName.replace(/^(a |the |an )/i, "").trim();
    },
  },
};

//Using the above function to sort the bands without changing them

// document.querySelector("#bands").innerHTML = this.sortedBands
//   .map((band) => `<li>${band}</li>`)
//   .join("");
</script>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
  background: url("https://source.unsplash.com/nDqA4d5NL0k/2000x2000");
  background-size: cover;
  display: flex;
  align-items: center;
  min-height: 100vh;
}

#bands {
  list-style: inside square;
  font-size: 20px;
  background: white;
  width: 500px;
  margin: auto;
  padding: 0;
  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.05);
}

#bands li {
  border-bottom: 1px solid #efefef;
  padding: 20px;
}

#bands li:last-child {
  border-bottom: 0;
}

a {
  color: #ffc600;
  text-decoration: none;
}
</style>
