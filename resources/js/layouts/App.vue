<template>
  <div>
    <Navbar></Navbar>
    <div id="layoutSidenav">
      <Sidebar></Sidebar>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <router-view></router-view>
          </div>
        </main>
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