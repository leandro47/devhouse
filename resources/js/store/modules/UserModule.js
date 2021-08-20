import axios from 'axios'

export default {
    state: {
        user: {},
        errors: []
    },
    getters: {
        fetchUserError: (state) => state.errors,
        fetchUser: (state) => state.user,
    },
    mutations: {
        setErrors: (state, errors) => state.errors.push(errors),
        clearErrors: (state) => state.errors = [],
        fetchUser: (state, user) => state.user = user,
    },
    actions: {
        async fetchUser({ commit }) {
            await axios.get("/api/user")
                .then((user) => {
                    commit("fetchUser", user.data);
                })
                .catch((error) => {
                    commit("setErrors", error.response);
                    alert(error);
                });
        }
    }
}
