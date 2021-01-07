import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

Vue.config.productionTip = false;
// const firebase = require("firebase/app");

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBFL0qFTGXRti993O9Vwa5rclupgXl4-tA",
      authDomain: "afisha-ad.firebaseapp.com",
      projectId: "afisha-ad",
      storageBucket: "afisha-ad.appspot.com",
      messagingSenderId: "420129347026",
      appId: "1:420129347026:web:5f5f7e6b5fa15c9caca40b",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });
  },
}).$mount("#app");
