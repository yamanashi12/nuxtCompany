import Vue from 'vue'
import filters from './filters'
import './directive'
import * as GlobalUI from './components'
Vue.use(GlobalUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 浏览器兼容处理
if (process.browser) {
  window.onload = () => {
    let triggerEvent = (node) => { // 触发input事件
      let event = document.createEvent('HTMLEvents')
      event.initEvent('input', true, true)
      node.dispatchEvent(event)
    }
    document.addEventListener('focusout', (e) => {
      let target = e.target
      if (/^(input|textarea)$/i.test(target.nodeName) && target.value && target.getAttribute('maxLength') && target.maxLength < target.value.length) { // 异常处理
        target.value = target.value.substring(0, target.maxLength)
        if (target.dispatchEvent) {
          triggerEvent(target)
        }
      }
    }, false)
    if (document.all && /MSIE 9./i.test(navigator.appVersion)) { // ie 9兼容处理
      let $timer = null
      let handle = (e) => {
        $timer && clearTimeout($timer)
        let target = e.target
        if (target.dispatchEvent) {
          $timer = setTimeout(() => {
            triggerEvent(target)
          }, 150)
        }
      }
      document.addEventListener('keyup', handle, false)
      document.addEventListener('focusout', handle, false)
    }
  }
}
