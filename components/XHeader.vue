<template>
  <header>
    <div class="head-box">
      <div class="logo">
        <img src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
      </div>
      <div class="mune">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li>
          <a href="">Product</a>
          <ul>
            <li>111112312</li>
            <li>111112312</li>
            <li>111112312</li>
            <li>111112312</li>
            <li>111112312</li>
          </ul>
        </li>
        <li><a href="">Contact</a></li>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
header{
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  padding: 20px 0;
  .head-box{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .logo{
    display: inline-block;
    float: left;
    img{
      height: 50px;
      width: auto;
    }
  }
  .mune{
    display: inline-block;
    float: right;
    li{
      position: relative;
      list-style-type: none;
      float: left;
      line-height: 50px;
      padding: 0 15px;
      font-weight: 800;
      font-size: 16px;
      a{
        color: $color-c10;
      }
      ul{
        display: none
      }
      &:hover{
        a{
          color: $color-c1
        }
        ul{
          position: absolute;
          display: block;
          left: 0;
          top: 50px;
          background: $color-c1;
          border-radius: 5px;
          min-width: 80px;
          padding: 5px 0;
          margin: 0;
          li{
            padding: 5px 10px;
            text-align: left;
            line-height: 30px;
          }
        }
      }
      
    }
  }
}
</style>
