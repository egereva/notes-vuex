export default {
    state: {
        search:''
    },
    mutations: {
        setSearchValue (state, payload) {
            state.search = payload
        }
    },
    actions: {
        setSearchValue ({commit}, payload) {
            commit('setSearchValue', payload)
        }
    },
    getters: {
        getSearchValue (state) {
            return state.search
        }
    }
}
