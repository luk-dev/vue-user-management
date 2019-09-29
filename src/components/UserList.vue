<template>
  <div class="list__item row no-gutters">
    <div class="col-3 col-md-2 col-lg-1">
      <img class="list__avatar " :src="user.avatar">
    </div>
    <div class="col-6 col-md-8 col-lg-10">
      {{ user.first_name }} {{ user.last_name }}
    </div>
    <div class="col-3 col-md-2 col-lg-1">
      <div>
        <router-link :to="{name: 'user-edit', params: {id: user.id}}">
          <img class="list__link" :src="require('@/assets/icons/edit.svg')">
        </router-link>
        <img @click="deleteUser(user)" class="list__link" :src="require('@/assets/icons/trash.svg')">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleDelete () {
        this.contentDelete = false
        this.confirmDelete = true
      },
      deleteUser(user) {
        let response = confirm(`Are you sure you want to delete ${user.first_name}`)
        if(response){
          this.$store.dispatch('deleteUser', user)
        }
      }
    },
    props: ['user'],
  }
</script>

<style lang="scss">
  .list {
    border-top: 1px solid #f7f8fa;
    margin-top: 25px;
    overflow: hidden;
    padding: 25px 0 0;
    &__head {
      font-weight: 700;
      @media screen and (min-width: 767px) {
        padding: 10px;
      }
    }
    &__item {
      align-items: center;
      border-radius: 5px;
      font-size: 15px;
      margin-top: 15px;
      padding: 5px 0;
      @media screen and (min-width: 767px) {
        padding: 10px;
        margin-top: 0;
      }
      &:nth-child(even) {
        background: #f4f6f8
      }
    }
    &__avatar {
      border-radius: 50%;
      margin-left: 5px;
      height: 50px;
    }
    &__link {
      height: 17px;
      margin-right: 10px;
      @media screen and (min-width: 767px) {
        margin-right: 10px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>