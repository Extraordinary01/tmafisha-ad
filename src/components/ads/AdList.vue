<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-5">My ads</h1>
        <v-card class="elevation-12 mb-6" v-for="ad in myAds" :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imgSrc" height="160px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-title class="text--primary">{{ ad.title }}</v-card-title>
              <v-card-text>{{ ad.description }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mr-4" color="primary" :to="'/ad/' + ad.id"
                  >Dowamy</v-btn
                >
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    },
  },
};
</script>

<style lang="scss">
</style>