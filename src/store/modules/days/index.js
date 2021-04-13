import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  state() {
    return {
      days: [{}],
    };
  },
  mutations: daysMutations,
  getters: daysGetters,
  actions: daysActions,
};
