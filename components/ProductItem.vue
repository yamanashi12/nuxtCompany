<template>
  <div class="portfolio-item col-sm-6">
    <div class="portfolio-wrap">
      <div clsss="figure">
        <img :src="data.imgUrl" class="img-fluid" alt="" />
        <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
      </div>

      <div class="portfolio-info">
        <h4><a href="#">{{data.title}}</a></h4>
        <p>{{data.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/var";
#portfolio {
  .portfolio-item {
    position: relative;
    height: 360px;
    overflow: hidden;
    .figure {
      background: #000;
      overflow: hidden;
      height: 240px;
      position: relative;
      border-radius: 4px 4px 0 0;
      margin: 0;
      .img-fluid {
        max-width: 100%;
        height: auto;
      }
    }
    .portfolio-info {
      background: #fff;
      text-align: center;
      padding: 30px;
      height: 90px;
      border-radius: 0 0 3px 3px;
      h4 {
        font-size: 18px;
        line-height: 1px;
        font-weight: 700;
        margin-bottom: 18px;
        padding-bottom: 0;
        a {
          color: #333;
        }
        p {
          padding: 0;
          margin: 0;
          color: #b8b8b8;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
