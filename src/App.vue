<template>
  <div>
    <router-view id="app"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
      this.$store.dispatch('fetchUsers')
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/main';
</style>
