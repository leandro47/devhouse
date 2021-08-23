<template>
  <div class="container-scroller">
    <Sidebar v-if="user.name"></Sidebar>
    <div class="container-fluid">
      <Navbar v-if="user.name"></Navbar>
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
  },
};
</script>

<style>
</style>