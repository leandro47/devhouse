<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-center">Login</h4>
          <form class="forms-sample">
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="form.password"
              />
            </div>
            <button @click.prevent="login" type="submit" class="btn btn-primary mr-2 btn-block">Entrar</button>
          </form>
        </div>
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