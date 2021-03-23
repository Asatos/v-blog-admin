import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局css
import '@/assets/css/index.css'

// eslint-disable-next-line
import { Button, Form, FormItem, Input, Checkbox } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
