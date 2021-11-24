<template>
  <form>
      <div class="form-field">
          <label for="login">Login</label>
          <input id = "login" type="text" required>
      </div>
      <div class="form-field">
      <label for="password">Password</label>
      <input id = "password" type="text" required>
      </div>
      <button class = "submit-btn" type="submit">Войти</button>
      <div class="action-link">
          <span>Нет аккаунта</span>
          <a @click="redirect" class = "link-btn">Зарегистрироваться</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginPage",
    async mounted()
    {
    },
    methods:{
      redirect(){
            this.$router.push('/registration')
      }
    }
};
</script>
<style>

</style>