<template>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      error: "fetchUserError",
    }),
  },
  methods: {
    ...mapActions({
      logoutUser: "logoutUser",
    }),
    async logout() {
      await this.logoutUser();

      if (!this.error.length) {
        return this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style>
</style>