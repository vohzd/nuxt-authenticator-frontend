<template lang="html">
  <section class="authentication-form">
    <h2>{{ headerText }}</h2>
    <input class="mt" type="text" placeholder="email" v-model="email" @keyup.enter.prevent="handleLogin" :class="generateFormValidationClass()" />
    <input class="mt" type="password" placeholder="password" v-model="password" @keyup.enter.prevent="handleLogin" v-if="needsPassword" :class="generateFormValidationClass()" />
    <button class="mt" @click="handleLogin" :disabled="!isFormValid()" :class="generateFormValidationClass() "><span v-if="!isLoading">Go</span><span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span></button>
    <nuxt-link to="/forgot" v-if="needsPassword" >Forgot password?</nuxt-link>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data (){
    return {
      email: "",
      password: "",
      needsPassword: false,
      headerText: "Enter your email",
      isLoading: false,
      regEx: /\S+@\S+\.\S+/
    }
  },
  methods: {
    ...mapActions([
      "checkAuthState",
      "setIsLoggedIn"
    ]),
    async checkEmailExists(){
      this.isLoading = true;
      let res = await this.$axios.get(`http://localhost:1337/user/${this.email}/`);
      this.isLoading = false;
      return res.data.userExists;
    },
    generateFormValidationClass(){
      return this.needsPassword ? (!this.email && !this.password) ? "" : (this.isFormValid()) ? "valid-input" : "invalid-input" : (!this.email) ? "" : (this.isFormValid()) ? "valid-input" : "invalid-input"
    },
    isFormValid(){
      return this.needsPassword ? ((this.regEx.test(this.email) && this.password.length) ? true : false) : (this.regEx.test(this.email)) ? true : false;
    },
    async handleLogin(){
      this.needsPassword = true;
      if (await this.checkEmailExists()){
        this.headerText = "Welcome back";
        if (this.password){
          this.login();
        }
      }
      else {
        this.headerText = "Please register for an account.";
        if (this.password){
          let res = await this.register();
          if (res.status === 200){
            console.log("logging in...")
            this.login();
            this.isLoading = false;
          }
        }
      }
    },
    async register(){
      this.isLoading = true;
      return await this.$axios.post(`http://localhost:1337/register/`, {
        email: this.email,
        password: this.password
      });
    },
    async login(){
      this.isLoading = true;
      let res = await this.$axios.post(`http://localhost:1337/login/`, { email: this.email, password: this.password }, { withCredentials: true });
      this.checkAuthState();
    },
    reset(){
      this.isLoading = false;
      this.needsPassword = false;
      this.headerText = "Enter your email";
      this.password = "";
    }
  },
  watch: {
    email(){
      this.reset();
    }
  }
}
</script>

<style lang="css">

.authentication-form {

}

  .authentication-form input {
    width: 100%;
  }





</style>
