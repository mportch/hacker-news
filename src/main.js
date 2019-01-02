import Vue from 'vue'
import App from './App.vue'

import store from './store'

import Framevuerk from 'framevuerk/dist/framevuerk.js'
import 'framevuerk/dist/framevuerk.css'

Vue.use(Framevuerk)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')
