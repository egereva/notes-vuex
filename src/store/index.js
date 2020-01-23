import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notes from './notes'
import priorities from "./priorities";

export default new Vuex.Store({
    modules: {
        notes,
        priorities
    }
})
