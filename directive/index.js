import Vue from 'vue'
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted (el) {
    // 聚焦元素
    if (/^(input||textarea)$/i.test(el.nodeName)) {
      el.focus()
    } else {
      let node = el.querySelector('input,textarea')
      node && node.focus()
    }
  }
})
