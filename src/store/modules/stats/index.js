import statsMutations from "./mutations.js";
import statsActions from "./actions.js";
import statsGetters from "./getters.js";

export default {
  namespaced: true,
  mutations: statsMutations,
  actions: statsActions,
  getters: statsGetters,
};
