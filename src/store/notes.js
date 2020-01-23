export default {
    state: {
        notes: [
            {
                id: 1,
                title: 'First Note',
                descr: 'Description for first note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standard',
                selected: false,
                newTitle: ''
            },
            {
                id: 2,
                title: 'Second Note',
                descr: 'Description for second note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standard',
                selected: false
            },
            {
                id: 3,
                title: 'Third Note',
                descr: 'Description for third note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standard',
                selected: false
            }
        ]
    },
    mutations: {
        addNote (state, payload) {
            state.notes.push(payload)
        }
    },
    actions: {
        addNote ({commit}, payload) {
            commit('addMessage', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}
