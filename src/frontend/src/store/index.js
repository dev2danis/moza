import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import envStore from '@/store/modules/envStore'

const store = new Vuex.Store({
    modules: {
        envStore: envStore
    },
})

export default store