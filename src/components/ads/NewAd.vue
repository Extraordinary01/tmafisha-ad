<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Create new ad</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            :rules="[(v) => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Description"
            type="text"
            :rules="[(v) => !!v || 'Description is required']"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn color="blue-grey" class="ma-2 white--text">
              Upload
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              color="primary"
              label="Add to promo"
              v-model="switch1"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" :disabled="!valid" @click="createAd"
              >Create Ad</v-btn
            >
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
      switch1: false,
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.switch1,
          imageSrc:
            "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vue.js-cta-main.jpg",
        };
        this.$store.dispatch("createAd", ad);
      }
    },
  },
};
</script>

<style lang="scss">
</style>