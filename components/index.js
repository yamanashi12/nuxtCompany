import ProductItem from './ProductItem'
import XHeader from './XHeader'
import XFooter from './XFooter'
import XTitle from './XTitle'

const components = {
  XHeader,
  ProductItem,
  XFooter,
  XTitle
}

const install = function (Vue, opts = {}) {
  for (let name in components) {
    console.log(name)
    Vue.component(name, components[name])
  }
}

export {
  install,
  XHeader,
  ProductItem,
  XFooter,
  XTitle
}
