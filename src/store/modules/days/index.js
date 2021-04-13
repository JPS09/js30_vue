import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  state() {
    return {
      days: [
        {
          id: "d1",
          name: "Day 1",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d2",
          name: "Day 2",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d3",
          name: "Day 3",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d4",
          name: "Day 4",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d5",
          name: "Day 5",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d6",
          name: "Day 6",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d7",
          name: "Day 7",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d8",
          name: "Day 8",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d9",
          name: "Day 9",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d10",
          name: "Day 10",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d11",
          name: "Day 11",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d12",
          name: "Day 12",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d13",
          name: "Day 13",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d14",
          name: "Day 14",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d15",
          name: "Day 15",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d16",
          name: "Day 16",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d17",
          name: "Day 17",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d18",
          name: "Day 18",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d19",
          name: "Day 19",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d20",
          name: "Day 20",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d21",
          name: "Day 21",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d22",
          name: "Day 22",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d23",
          name: "Day 23",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d24",
          name: "Day 24",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d25",
          name: "Day 25",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d26",
          name: "Day 26",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d27",
          name: "Day 27",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d28",
          name: "Day 28",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d29",
          name: "Day 29",
          description:
            "This challenge makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["tips", "drums"],
          viewed: false,
        },
        {
          id: "d30",
          name: "Day 30",
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
