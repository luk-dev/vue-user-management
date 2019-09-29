<template>
  <div class="search">
    <input class="search__input" v-model="search" placeholder="Search for users" type="text">
    <img class="search__icon" :src="require('@/assets/icons/search.svg')">
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    name: 'Search',
    data(){
      return {
        search:''
      }
    }
  }
</script>

<style lang="scss">
  .search {
    &__input {
      background-color: #f6f7f8;
      padding: 8px 10px;
      border-radius: 5px;
      border: 0;
      font-size: 16px;
      font-weight: 400;
      width: 100%;
      outline: none;
    }
    &__icon {
      height: 17px;
      position: absolute;
      top: 10px;
      right: 32px;
    }
  }
</style>
