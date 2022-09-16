import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//BOOTSTRAP

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


//FONTAWSOME

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronRight, faMagnifyingGlass, faCartShopping, faArrowRight, faPlay, faDumbbell, faChild} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faChevronRight, faMagnifyingGlass, faCartShopping, faYoutube, faArrowRight, faPlay, faClock, faDumbbell, faChild)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')


