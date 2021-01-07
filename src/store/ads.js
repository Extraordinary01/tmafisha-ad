export default {
  state: {
    ads: [
      {
        title: "First ad",
        description: "I am description for 1st ad",
        promo: false,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1",
      },
      {
        title: "Second ad",
        description: "I am description for 2nd ad",
        promo: true,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "2",
      },
      {
        title: "Third ad",
        description: "I am description for 3rd ad",
        promo: true,
        imgSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "3",
      },
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = Math.round(Math.random() * 100 + 4);
      commit("createAd", payload);
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((ad) => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return (adId) => {
        return state.ads.find((ad) => ad.id == adId);
      };
    },
  },
};
