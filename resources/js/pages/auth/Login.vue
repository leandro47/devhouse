<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Dev House</h1>
        <p class="col-lg-10 fs-4">Risco vem de você não saber o que está fazendo. Controle o seu dinheiro.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" v-model="form.email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" v-model="form.password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" @click.prevent="login" type="submit">Entrar</button>
          <hr class="my-4">
          <div class="text-center">
            <small class="text-muted">Version 1.0.0</small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      error: "fetchUserError",
      user: "fetchUser",
    }),
  },
  methods: {
    ...mapActions({
      authUser: "authUser",
    }),
    async login() {
      await this.authUser(this.form);

      if (!this.error.length) {
        return this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>

<style scoped>
</style>