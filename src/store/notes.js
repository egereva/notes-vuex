export default {
    state: {
        notes: [
            {
                title: 'First Note',
                descr: 'Description for first note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standard',
                selected: false,
                newTitle: ''
            },
            {
                title: 'Second Note',
                descr: 'Description for second note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standard',
                selected: false
            },
            {
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
        },
        removeNote (state, preload) {
            state.notes.splice(preload, 1)
        },
        closeEdit (state) {
            state.notes.forEach(note => note.selected = false)
        },
        editString(state, payload) {
            state.notes.forEach( note => note.selected = false )
            state.notes[payload].selected = true
        },
        saveСhanges(state, payload) {
            state.notes[payload.index].selected = false

            if(payload.titleEdit) {
                state.notes[payload.index].title = payload.newTitle
            }else {
                state.notes[payload.index].descr = payload.newDescription
            }
        },
        deleteСhanges (state, payload) {
            state.notes[payload].selected = false
        }
    },
    actions: {
        addNote ({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote ({commit}, payload) {
            commit('removeNote', payload)
        },
        closeEdit ({commit}) {
            commit('closeEdit')
        },
        editString ({commit}, payload) {
            commit('editString', payload)
        },
        saveСhanges ({commit}, payload) {
            commit('saveСhanges', payload)
        },
        deleteСhanges ({commit}, payload) {
            commit('deleteСhanges', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}
