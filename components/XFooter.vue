<template>
  <footer>
    <div class="footer-top">
      <div class="contaner">
        <div class="row">
          <div class="col-md-4 footer-info">
            <h3>BizPage</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>
          <div class="col-md-4 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div class="col-md-4 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="contaner">
      <div class="copyright">
        备案号
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../styles/var";
footer {
  background: #000;
  padding: 0 0 30px 0;
  color: #eee;
  font-size: 14px;
  h4 {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 12px;
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
    }
    &::after {
      background: #18d26e;
      width: 60px;
    }
    &::before {
      right: 0;
      background: #555;
    }
  }
  .footer-top {
    background: #111;
    padding: 60px 0 30px 0;
    .footer-info {
      margin-bottom: 30px;
      h3 {
        font-size: 34px;
        margin: 0 0 20px 0;
        padding: 2px 0 2px 10px;
        line-height: 1;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        border-left: 4px solid #18d26e;
      }
    }
    .footer-links {
      margin-bottom: 30px;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          border-bottom: 1px solid #333;
          padding: 10px 0;
          i {
            padding-right: 8px;
            color: #ddd;
          }
          a {
            color: #eee;
          }
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
    .footer-contact {
      margin-bottom: 30px;
      p {
        line-height: 26px;
      }
    }
  }
  .copyright {
    text-align: center;
    padding-top: 30px;
  }
}
</style>
