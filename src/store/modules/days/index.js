import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  state() {
    return {
      days: [
        {
          id: "d1",
          name: " Day 1",
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
