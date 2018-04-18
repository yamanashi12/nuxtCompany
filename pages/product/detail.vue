<template>
  <section >
    <X-header />
    <b-breadcrumb :items="breadcrumb"/>
    <div class="container product-details">
      <div class="row">
        <div class="col-sm-7 product-view">
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
          <p> <i class="glyphicon glyphicon-map-marker"></i><a href="#">state</a>, <a href="#">city</a>| Added at 06:55 pm, Ad ID: 987654321</p>
          <b-carousel id="carousel1"
            controls
            indicators
            :interval="4000"
            img-width="auto"
            img-height="auto">
            <b-carousel-slide  v-for="(item, index) in imgList" :key='index' :img-src="item" />
          </b-carousel>
        </div>
        <div class="col-sm-5 product-details-grid">
          <div class="item-price">
						<div class="product-price">
							<p class="p-price">Price</p>
							<h3 class="rate">$ 259</h3>
							<div class="clearfix"></div>
						</div>
						<div class="condition">
							<p class="p-price">Condition</p>
							<h4>Good</h4>
							<div class="clearfix"></div>
						</div>
						<div class="itemtype">
							<p class="p-price">Item Type</p>
							<h4>Phones</h4>
							<div class="clearfix"></div>
						</div>
					</div>
          <div class="interested text-center">
						<h4>Interested in this Ad?<small> Contact the Seller!</small></h4>
            <b-button size="lg" variant="success">
                购买
            </b-button>
						<p><i class="ion-ios-telephone"></i>00-85-9875462655</p>
					</div>
        </div>
      </div>
      <div class="detail row">
        <img src="https://lorempixel.com/1024/480/technics/4/">
        <img src="https://lorempixel.com/1024/480/technics/4/">
        <img src="https://lorempixel.com/1024/480/technics/4/">
      </div>
    </div>
    <x-footer />
  </section>
</template>

<script>
import XHeader from "~/components/XHeader.vue";
import ProductItem from "~/components/ProductItem.vue";
import XFooter from "~/components/XFooter.vue";

export default {
  components: {
    XHeader,
    ProductItem,
    XFooter
  },
  data() {
    return {
      imgList: [
        "https://lorempixel.com/1024/480/technics/4/",
        "https://lorempixel.com/1024/480/technics/2/"
      ],
      breadcrumb: [
        {
          text: "HOME",
          href: "#"
        },
        {
          text: "PRODUCT",
          href: "#"
        }
      ],
      product: [
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        },
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        },
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        },
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        },
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        },
        {
          title: "aaaaa",
          imgUrl:
            "http://demo.cssmoban.com/cssthemes4/twts_16_bizpage-master/img/portfolio/app1.jpg",
          id: 1
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-details {
  .product-view {
    padding: 15px;
    border: 1px solid #eee;
    .product-view h2 {
    font-size: 28px;
    color: #000;
    line-height: 1.3;
    p {
      font-size: 13px;
      color: #929292;
      margin: 15px 0;
      word-spacing: 3px;
      a {
        margin-right: 4px;
        color: #01a185;
        font-size: 14px;
      }
      i {
        margin-right: 4px;
        color: #f3c500;
        font-size: 14px;
      }
    }
  }
}
  .product-details-grid {
    .item-price {
      border: 3px solid rgba(1, 161, 133, 0.36);
      margin-left: 15%;
      padding: 0 15px;
      position: relative;
      p.p-price {
        float: left;
        width: 50%;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #424242;
        vertical-align: middle;
        margin-top: 8px;
        margin-left: 20px;
      }
      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        left: -1098px;
        margin-left: -105px;
        background-color: rgba(0, 0, 0, 0);
        border: 105px solid rgba(0, 0, 0, 0);
        border-right-color: rgba(1, 161, 133, 0.36);
        height: 0;
        width: 0;
        top: -3px;
      }
      .product-price {
        padding: 20px 0;

        h3.rate {
          float: left;
          color: #f3c500;
          font-size: 30px;
        }
      }
      .condition {
        padding: 20px 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        p,
        .itemtype p {
          margin: 0;
          margin-left: 20px;
        }
        h4,
        .itemtype h4 {
          margin: 0;
          float: left;
          font-size: 22px;
        }
      }
      .itemtype {
        padding: 20px 0;
        p {
          margin: 0;
          margin-left: 20px;
        }
        h4 {
          margin: 0;
          float: left;
          font-size: 22px;
        }
      }
    }
    .interested {
      margin: 20px;
      padding: 40px 20px;
      background: rgba(1, 161, 133, 0.36);
      margin-left: 15%;
      margin-right: 0;
      h4 {
        color: #000;
        font-size: 19px;
      }
      p {
        color: #000;
        font-size: 14px;
        margin: 30px 0 0 0;
        i {
          margin-right: 12px;
          color: #ffffff;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.38);
          padding: 7px;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          vertical-align: middle;
        }
      }
    }
  }
  .detail{
    padding: 20px;
    border: 1px solid #eee;
    margin-top: 20px;
    line-height: 26px;
    font-size: 16px;

    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>
