import { createStore } from "vuex";
import daysModule from "./modules/days/index.js";
import statsModule from "./modules/stats/index.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    days: daysModule,
    stats: statsModule,
  },
});
