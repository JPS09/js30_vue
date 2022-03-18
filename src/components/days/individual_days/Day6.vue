<template>
  <form class="search-form">
    <input
      type="text"
      class="search"
      placeholder="City or State"
      @input="displayCities()"
      v-model.trim="searchTerms"
    />
    <ul class="suggestions" v-if="results">
      <li v-for="result in results" :key="result">
        <span class="name">{{ result.city }} {{ result.state }}</span>
        <!--  for above span :class="{
            hl:
              new RegExp(this.searchTerms, 'gi').test(result.city) ||
              new RegExp(this.searchTerms, 'gi').test(result.state),
          }" -->
        <span class="population"
          >Pop: {{ this.numberWithCommas(result.population) }}</span
        >
      </li>
    </ul>
    <ul class="suggestions" v-else>
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
      endpoint:
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
      searchTerms: "",
      results: "",
    };
  },

  // input.value = "";
  mounted() {
    fetch(this.endpoint)
      .then((response) => response.json())
      .then((data) => this.cities.push(...data));
  },
  methods: {
    numberWithCommas(x) {
      // Adds commas to format the number in a pleasing way
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    resultDisplayFormatting(result) {
      // maybe use same kind of logic as above method to make it separate the city and country elements
      const regex = new RegExp(this.searchTerms, "gi");
      const newCityStyle = result.city.replace(regex, this.searchTerms);
      const newStateStyle = result.state.replace(regex, this.searchTerms);
      return [newCityStyle, newStateStyle];
    },
    displayCities() {
      this.results = this.searchFunction(this.searchTerms, this.cities);
      console.log(this.results);

      this.results
        .map((place) => {
          // Create a new Regex depending on the user input with a global and a case insensitive flags

          const regex = new RegExp(this.searchTerms, "gi");

          // Highlights part of the words that matches the search
          const highlightCity = place.city.replace(
            regex,
            `<span class='hl'>${this.searchTerms}</span>`
          );
          const highlightState = place.state.replace(
            regex,
            `<span class='hl'>${this.searchTerms}</span>`
          );
          return `
            <li>
              <span class='name'>${highlightCity}, ${highlightState}</span>
              <span class = 'population'>Pop: ${this.numberWithCommas(
                place.population
              )}</span>
            </li>
            `;
        })
        .join("");

      // Switch back to initial html if empty query
      // if (searchTerms === "") {
      //   listDisplay.innerHTML = `
      //         <li>Filter for a city</li>
      //         <li>or a state</li>`;
      // } else {
      //   // const listDisplay = document.querySelector(".suggestions")
      //   listDisplay.innerHTML = html;
      // }
    },
    searchFunction(wordToSearch, cities) {
      // Creates a regex based the parameters which is in fact the user input
      const regex = new RegExp(wordToSearch, "gi");
      // return the filtering array
      const userSearchResults = cities.filter((place) => {
        // Search on the city or the state based on the above regex
        return place.city.match(regex) || place.state.match(regex);
      });
      return userSearchResults.slice(0, 5);
    },
  },
};
</script>

<style scoped>
html {
  box-sizing: border-box;
  background: #50a28e;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

input {
  width: 100%;
  padding: 20px;
}

.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective: 20px;*/
}

.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span.population {
  font-size: 15px;
}

.hl {
  background: #ffc600;
}
</style>
