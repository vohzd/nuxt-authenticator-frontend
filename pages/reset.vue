<template lang="html">
  <main class="container">
    <h2>{{ headerText }}</h2>
    <section class="row">
      <input v-model="password" placeholder="password" @keyup.enter.prevent="handleReset" />
      <input v-model="passwordConfirm" placeholder="confirm password" @keyup.enter.prevent="handleReset" class="mt"/>

      <button class="mt" @click="handleReset" :disabled="!isFormValid()" :class="generateFormValidationClass()">
        <span v-if="!isLoading">Go</span>
        <span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span>
      </button>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data(){
    return {
      password: null,
      passwordConfirm: "",
      headerText: "Ener your new password",
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      "sendEmail",
      "requestPasswordReset"
    ]),
    isFormValid(){
      return (this.password === this.passwordConfirm) ? true : false;
    },
    generateFormValidationClass(){
      return (this.isFormValid()) ? "valid-input" : "invalid-input"
    },
    async handleReset(){
      if (!this.isFormValid()){
        return;
      }

      this.isLoading = true;
      const token = window.location.search.split("=")[1].split("&")[0];
      const userId = window.location.search.split("=")[2];
      console.log(token);

      let res = await this.$axios.post(`http://localhost:1337/perform-password-reset/`, {
        userId,
        token,
        password: this.password
      });

      console.log(res);

      /*if (res.data.userExists){
        setTimeout(() => {
          this.headerText = "Thanks, an email with your reset link has been sent.";
          this.emailSent = true;
          this.isLoading = false;
          this.requestPasswordReset(this.email);
        }, 1000);
      }
      else {
        this.headerText = "That user doesn't exist";
        this.isLoading = false;

      }*/
    }
  }
}

</script>
