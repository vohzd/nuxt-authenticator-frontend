<template lang="html">
  <main class="container">
    <h2>{{ headerText }}</h2>
    <section class="row">
      <input v-model="email" v-if="!emailSent" placeholder="email" />
      <button class="mt" @click="handleReset" :disabled="!isFormValid()" :class="generateFormValidationClass() ">
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
      email: "",
      emailSent: false,
      headerText: "Forgot your password?",
      isLoading: false,
      regEx: /\S+@\S+\.\S+/
    }
  },
  methods: {
    ...mapActions([
      "sendEmail"
    ]),
    isFormValid(){
      return (this.regEx.test(this.email)) ? true : false;
    },
    generateFormValidationClass(){
      return (this.isFormValid()) ? "valid-input" : "invalid-input"
    },
    handleReset(){
      this.isLoading = true;
      setTimeout(() => {
        this.headerText = "Thanks, an email with your reset link has been sent.";
        this.emailSent = true;
        this.isLoading = false;
        this.sendEmail(this.email);
      }, 1000);

    }
  }
}

</script>
