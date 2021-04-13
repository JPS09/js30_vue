import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  state() {
    return {
      days: [
        {
          id: "d1",
          dayNumber: "Day 1",
          name: "Drum Kit",
          description:
            "This exercise makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d2",
          dayNumber: "Day 2",
          name: "JS & CSS Clock",
          description:
            "Creating a JS clock that updates depending on the current time by fetching it from a Date object",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d3",
          dayNumber: "Day 3",
          name: "CSS Variables",
          description: "Modifiying CSS variables thanks to pure JS code",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d4",
          dayNumber: "Day 4",
          name: "Array Cardio Part 1",
          description:
            "A variety of methods to handle arrays inside JS alongside many ways of implementing them",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d5",
          dayNumber: "Day 5",
          name: "Flex Panel Galery",
          description:
            "A simple exercise based on the CSS Box model and made interactive by toggling classes on click",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d6",
          dayNumber: "Day 6",
          name: "Type Ahead",
          description:
            "Simple search field made for finding a state or a city based on user input",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d7",
          dayNumber: "Day 7",
          name: "Array Cardio Part 2",
          description:
            "Second Part of an exercise made to present several array handling methods and their possible syntaxes",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d8",
          dayNumber: "Day 8",
          name: "Fun with HTML5 Canvas",
          description:
            "Makes use of the canvas element available in HTML5 to allow the user to draw on it",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d9",
          dayNumber: "Day 9",
          name: "Dev Tools Domination",
          description:
            "The console has many ways of diplaying messages which we have the opportunity to see here",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d10",
          dayNumber: "Day 10",
          name: "Hold Shift and Check Checkboxes",
          description:
            "Using the this keyword and several flag variable to be able to check several checkboxes at once",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d11",
          dayNumber: "Day 11",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d12",
          dayNumber: "Day 12",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d13",
          dayNumber: "Day 13",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d14",
          dayNumber: "Day 14",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d15",
          dayNumber: "Day 15",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d16",
          dayNumber: "Day 16",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d17",
          dayNumber: "Day 17",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d18",
          dayNumber: "Day 18",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d19",
          dayNumber: "Day 19",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d20",
          dayNumber: "Day 20",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d21",
          dayNumber: "Day 21",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d22",
          dayNumber: "Day 22",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d23",
          dayNumber: "Day 23",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d24",
          dayNumber: "Day 24",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d25",
          dayNumber: "Day 25",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d26",
          dayNumber: "Day 26",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d27",
          dayNumber: "Day 27",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d28",
          dayNumber: "Day 28",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d29",
          dayNumber: "Day 29",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d30",
          dayNumber: "Day 30",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
      ],
    };
  },
  mutations: daysMutations,
  getters: daysGetters,
  actions: daysActions,
};
