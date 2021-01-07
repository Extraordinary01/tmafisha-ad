<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imgSrc"
            >
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card max-width="374">
            <v-img height="250" :src="ad.imgSrc"></v-img>

            <v-card-title>{{ ad.title }}</v-card-title>

            <v-card-text>
              <div class="my-4 subtitle-1">Mary shaher, Kafe</div>

              <div>
                {{ ad.description }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text :to="'/ad/' + ad.id"> Dowamy </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
  },
};
</script>

<style lang="scss" scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba($color: #000000, $alpha: 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>