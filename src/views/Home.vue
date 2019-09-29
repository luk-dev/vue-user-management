<template>
  <div class="home">
    <h1>User list</h1>
    <div class="default-layout__content">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <Search />
        </div>
        <div class="col-md-6 col-lg-8 home__button">
          <router-link :to="{name: 'user-new'}" class="btn btn--big">
            <img :src="require('@/assets/icons/add.svg')"> Add user
           </router-link>
        </div>
      </div>
      <div class="list">
        <div class="list__head row no-gutters">
          <div class="col-9 col-md-10 offset-lg-1">
            Full Name
          </div>
          <div class="col-3 col-md-2 col-lg-1">
            Action
          </div>
        </div>
        <UserList v-for="user in users" :key="user.first_name" :user="user" />
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Search from '@/components/Search.vue'
  import UserList from '@/components/UserList.vue'
  import Pagination from '@/components/Pagination.vue'

  export default {
    name: 'home',
    components: { 
      Search, 
      UserList, 
      Pagination 
    },
    computed: {
      ...mapState(['users'])
    }
  }
</script>

<style lang="scss">
  .home {
    &__button {
      text-align: center;
      margin-top: 25px;
      @media screen and (min-width: 767px) {
        text-align: right;
        margin-top: 0;
      }
    }
  }
</style>
