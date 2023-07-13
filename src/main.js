import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'
import Tilt from 'vanilla-tilt-vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VuePrlx from 'vue-prlx'
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)
Vue.use(VuePrlx);
Vue.use(BootstrapVue)
Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
