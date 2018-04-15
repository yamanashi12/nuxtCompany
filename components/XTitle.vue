<template>
  <div class="section-header">
    <h3 class="section-title">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.section-title {
  margin-top: 60px;
  font-size: 32px;
  color: #111;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #18d26e;
    bottom: 0;
    left: calc(50% - 20px);
  }
}
</style>
