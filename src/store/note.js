export default {
    state: {
        note: {
            id: '',
            title: '',
            descr: '',
            priority: 'standard',
            selected: false
        }
    },
    mutations: {
        setPriority (state, preload) {
            state.note.priority = preload
        },
        resetNote (state) {
            state.note.title = ''
            state.note.descr = ''
            state.note.priority = 'standard',
            state.note.selected = false
        }
    },
    actions: {
        setPriority ({commit}, preload) {
            commit ('setPriority', preload)
        },
        resetNote({commit}) {
            commit ('resetNote')
        }
    },
    getters: {
        getNote (state) {
            return state.note
        },

    }
}
