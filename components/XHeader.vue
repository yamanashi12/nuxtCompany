<template>
  <b-navbar class="" toggleable="md" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">
      <img src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/about">About Us</b-nav-item>
        <b-nav-item href="/product">Product</b-nav-item>
        <b-nav-item href="/contact">contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/var";
.navbar-dark .navbar-nav .nav-link {
    color: $color-c2;
}
.navbar-dark .navbar-toggler {
    background: $color-c1
}

@media (max-width: 768px){
  .navbar{
    .navbar-nav{
      li.nav-item{
        border-bottom: 1px solid $color-c3;
      }
    }
  }
}
</style>
