<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.imgSrc" height="300px"></v-img>
          <v-card-title class="text--primary">{{ ad.title }}</v-card-title>
          <v-card-text>{{ ad.description }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning"
              ><v-icon left> mdi-pencil </v-icon>Edit</v-btn
            >
            <v-btn class="success"
              ><v-icon class="mr-2"> mdi-thumb-up </v-icon>Like</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
  },
};
</script>

<style lang="scss">
</style>