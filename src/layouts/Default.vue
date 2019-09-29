<template>
  <div class="default-layout">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Default'
  };
</script>

<style lang="scss">
  .default-layout {
    &__content {
      position: relative;
      background-color: #ffffff;
      padding: 20px 15px;
      border-radius: 5px;
      margin-bottom: 15px;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
      @media screen and (min-width: 767px) {
        padding: 40px 25px 10px;
        min-height: 400px;
      }
    }
  }
</style>
