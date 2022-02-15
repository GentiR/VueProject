<template>
  <div class="profile">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
      <div class="container">
          <h2>Account Settings</h2>
          <div class="profile-info">
              <div class="initals">{{ $store.state.profileInitials }}</div>
              <div class="admin-badge">
                  <adminIcon class="icon"/>
                  <span>admin</span>
              </div>
              <div class="input">
                  <label for="firstName"> First Name</label>
                  <input type="text" id="firstName" v-model="firstName"/>
              </div>
              <div class="input">
                  <label for="lastName"> Last Name</label>
                  <input type="text" id="lastName" v-model="lastName"/>
              </div>
              <div class="input">
                  <label for="username"> Username</label>
                  <input type="text" id="username" v-model="username"/>
              </div>
              <div class="input">
                  <label for="email"> Email</label>
                  <input disabled type="text" id="email" v-model="email"/>
              </div>
              <button>Save Changes</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>