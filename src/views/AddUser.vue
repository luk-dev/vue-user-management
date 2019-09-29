<template>
  <div class="user">
    <h1>Add user</h1>
    <UserForm :form="form" :editAvatar="editAvatar" :saveUser="createUser" buttonText="Add User" />
  </div>
</template>

<script>
  import UserForm from '@/components/UserForm'
  export default {
    data () {
      return {
        form: {
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
        editAvatar: false
      }
    },
    components: { 
      UserForm
    },
    methods: {
      async createUser() {
        let user = await this.$store.dispatch('createUser', this.form)
        this.$router.push({ name: 'home'})
      }
    }
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
