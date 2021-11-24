<template>
 <form class = "registration-form auth-form">
      <div class="form-field">
          <label for="email">Email</label>
          <input id = "email" type="text" required>
      </div>
      <div class="form-field">
          <label for="login">Login</label>
          <input id = "login" type="text" required>
      </div>
      <div class="form-field">
      <label for="password">Password</label>
      <input id = "password" type="text" required>
      </div>
      <button class = "submit-btn" type="submit">Регистрация</button>
      <div class="action-link">
          <span>Есть аккаунт?</span>
          <a @click="redirect" class = "link-btn">Войти</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegistrationPage",
  async mounted(){

  },
  methods:{
      redirect(){
            this.$router.push('/login')
      }
    }

};
</script>
<style>
.hh{
  text-align: center;
}
</style>