<template>
  <section >
    <X-header />
    <b-breadcrumb :items="breadcrumb"/>
    <div class="container">
      <b-row class="row">
        <product-item v-for="(item, index) in product" :key='index' :data="item"/>
      </b-row>
    </div>
    <x-footer />
  </section>
</template>

<script>
import XHeader from '~/components/XHeader.vue'
import ProductItem from '~/components/ProductItem.vue'
import XFooter from '~/components/XFooter.vue'

export default {
  components: {
    XHeader,
    ProductItem,
    XFooter
  },
  data () {
    return {
      breadcrumb: [{
        text: 'HOME',
        href: '#'
      }, {
        text: 'PRODUCT',
        href: '#'
      }],
      product: [
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        },
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        },
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        },
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        },
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        },
        {
          title: 'aaaaa',
          imgUrl: 'http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg',
          id: 1
        }
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
#carousel1{
  
}
</style>
