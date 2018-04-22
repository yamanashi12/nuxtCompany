import Vue from 'vue'
import filters from './filters'
import './directive'
import * as GlobalUI from './components'
Vue.use(GlobalUI)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

