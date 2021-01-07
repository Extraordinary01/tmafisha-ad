import firebase from "firebase/app";
require("firebase/auth");

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.message);
        throw err;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.message);
        throw err;
      }
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    logOutUser({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    },
  },
};
