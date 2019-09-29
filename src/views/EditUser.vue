<template>
  <div class="user">
    <h1>Edit user</h1>
    <UserForm :form="user" :saveUser="editUser" buttonText="Save User" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import UserForm from '@/components/UserForm'

  export default {
    components: {
      UserForm,
    },
    computed: {
      ...mapState(['users']),
      user() {
        return this.users.find(u => u.id == this.$route.params.id) || {};
      }
    },
    methods: {
      async editUser() {
        await this.$store.dispatch('editUser', this.user)
        this.$router.push({ name: 'home'})
      },
    },
  }
</script>

<style lang="scss">
  .user {
    &__avatar {
      height: 150px;
      margin: 20px auto;
      display: block;
      border-radius: 50%;
      border: 2px solid #6f6f6f;
    }
    &__avatar-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
