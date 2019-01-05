import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Framevuerk from 'framevuerk/dist/framevuerk.js'
import 'framevuerk/dist/framevuerk.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('fa', FontAwesomeIcon)

Vue.use(Framevuerk)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')
