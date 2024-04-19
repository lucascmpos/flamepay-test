import { createStore } from "vuex";

export default createStore({
  state: {
    fullName: "",
    cpf: "",
  },
  mutations: {
    updateFullName(state, fullName) {
      state.fullName = fullName;
    },
    updateCpf(state, cpf) {
      state.cpf = cpf;
    },
  },
});
