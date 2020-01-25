import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import note from './note'
import notes from './notes'
import search from "./search";
import priorities from "./priorities";

export default new Vuex.Store({
    modules: {
        note,
        notes,
        search,
        priorities
    },
    state: {
      message: null,
    },
    mutations: {
        setMessage (state, payload) {
            state.message = payload.mes
        }
    },
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getMessage (state) {
            return state.message
        },
        getNotesFilter (state) {
            let array = state.notes.notes,
                search = state.search.search


            if(!search) return array
            // Small
            search = search.trim().toLowerCase()
            //Filter
            array = array.filter(function(item) {
                if (item.title.toLowerCase().indexOf(search) !== -1) {
                    return item
                }
            })
            // Error
            return array;
        }
    }

})
