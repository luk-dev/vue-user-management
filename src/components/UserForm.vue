<template>
  <div>
    <div class="row">
      <div class="col-md-7 col-lg-8">
        <div class="default-layout__content">
          <form @submit.prevent="saveUser" class="row form">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-label" for="">First Name</label>
                <input v-model="form.first_name" class="form-control" type="text">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-label" for="">Last Name</label>
                <input v-model="form.last_name" class="form-control" type="text">
              </div>
            </div>
            <div v-if="editAvatar" class="col-lg-6">
              <div class="form-group">
                <label class="form-label" for="">Avatar</label>
                <input v-model="form.avatar" class="form-control" type="text">
              </div>
            </div>
            <div class="col-md-12 form-button">
              <button type="submit" class="btn">{{buttonText}}</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-5 col-lg-4">
        <div class="default-layout__content user__avatar-content">
          <img class="user__avatar" :src="form.avatar">
          <span @click="editAvatar = !editAvatar" class="btn btn--border">
            <img :src="require('@/assets/icons/camera.svg')">
            Change photo
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['form', 'editAvatar', 'saveUser', 'buttonText']
  }
</script>

<style lang="scss">
  .user {
    .form {
      margin-top: 20px;
      min-height: 325px;
    }
  }
</style>