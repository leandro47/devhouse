<template>
  <div class="container-scroller">
    <Sidebar></Sidebar>
    <div class="container-fluid page-body-wrapper">
      <Theme></Theme>
      <Navbar></Navbar>
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
import Theme from  "./../components/settings/theme/Theme.vue";

export default {
  components: {
    Footer,
    Navbar,
    Sidebar,
    Theme,
  },
};
</script>

<style>
</style>