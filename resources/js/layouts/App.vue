<template>
  <div class="container-scroller">
    <Sidebar v-if="user.data"></Sidebar>
    <div class="container-fluid page-body-wrapper">
      <Theme v-if="user.data"></Theme>
      <Navbar v-if="user.data"></Navbar>
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./../includes/footer/Footer";
import Navbar from "./../includes/navbar/Navbar";
import Sidebar from "./../includes/sidebar/Sidebar";
import Theme from "./../components/settings/theme/Theme.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "fetchUser",
    }),
  },
  components: {
    Footer,
    Navbar,
    Sidebar,
    Theme,
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser",
    }),
    async showMenu() {
      await this.fetchUser();
    },
  },
  created() {
    this.showMenu();
    console.log(this.user);
  },
};
</script>

<style>
</style>