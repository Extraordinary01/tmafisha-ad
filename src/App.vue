<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isUserLoggedIn" @click="onLogOut">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card color="grey lighten-4" flat height="75px" tile>
      <v-toolbar dense dark color="primary">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer"
            >Turkmen Afisha</router-link
          >
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="link in links"
            :key="link.title"
            color="primary"
            :to="link.url"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
          <v-btn v-if="isUserLoggedIn" color="primary" @click="onLogOut">
            <v-icon left>mdi-exit-to-app</v-icon>
            Logout
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
    <v-snackbar :timeout="5000" multi-line bottom :value="error" color="error"
      >{{ error }}
      <v-btn text dark @click.native="closeError">Close</v-btn></v-snackbar
    >
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "mdi-bookmark", url: "/orders" },
          { title: "New ad", icon: "mdi-file-plus", url: "/new" },
          { title: "My ads", icon: "mdi-format-list-bulleted", url: "/list" },
        ];
      }
      return [
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-account", url: "/register" },
      ];
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
