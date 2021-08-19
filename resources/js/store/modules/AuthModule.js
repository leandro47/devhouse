import axios from 'axios'

export default {
    state: {
        errors: []
    },
    getters: {
        fetchAuthError(state) {
            return state.errors
        }
    },
    mutations: {
        setErrors: (state, errors) => state.errors.push(errors),
        clearErrors: (state) => state.errors = [],
    },
    actions: {
        async authUser({ commit }, dataObject) {
            await axios.post("/api/login", dataObject)
                .then((user) => {
                    commit("clearErrors");
                })
                .catch((error) => {
                    commit("setErrors", error.response);
                    alert(error);
                });
        }
    }
}
