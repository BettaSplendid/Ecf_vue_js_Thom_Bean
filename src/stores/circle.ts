import { defineStore } from "pinia";

export const useCircleStore = defineStore({
  id: "circle",
  state: () => ({
    radius: 0,
  }),
  getters: {
    getRadius: (state) => state.radius,
  },
  actions: {
  },
});
