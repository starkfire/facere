import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

import {
  Button,
  Col,
  Icon,
  Row,
  Statistic,
  Layout,
  Tooltip
} from 'ant-design-vue'

Vue.use(Button)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Statistic)
Vue.use(Layout)
Vue.use(Tooltip)

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
