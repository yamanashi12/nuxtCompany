<template>
  <section >
    <X-header />
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="auto"
                img-height="auto"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://lorempixel.com/1024/480/technics/2/"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
      </b-carousel-slide>
    </b-carousel>
    <x-title>Hot</x-title>
    <div class="container">
      <div class="row">
        <product-item v-for="(item, index) in product" :key='index' :data="item"/>
      </div>
    </div>
  </section>
</template>

<script>
import XHeader from '~/components/XHeader.vue'
import XTitle from '~/components/XTitle.vue'
import ProductItem from '~/components/ProductItem.vue'

export default {
  components: {
    XHeader,
    XTitle,
    ProductItem
  },
  data () {
    return {
      slide: 0,
      sliding: null,
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
