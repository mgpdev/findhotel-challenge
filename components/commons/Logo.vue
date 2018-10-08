<template>
  <img
    :src="logo"
    class="logo"
    alt="FindHotel">
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/img/logo-findhotel-w.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo {
  width: 150px;
  margin: 10px 0px 0px 0px;
}
</style>
