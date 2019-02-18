<template lang="html">
  <section class="authentication-form">
    <h2>{{ headerText }}</h2>
    <input type="text" placeholder="email" v-model="email" @keyup.enter="handleLogin" :class="emailInputClass()" />
    <input placeholder="password" v-model="password" @keyup.enter="handleLogin" v-if="needsRegister"/>
    <button @click="handleLogin" :disabled="!isEmailValid()" :class="emailInputClass() ">Go</button>
    <div class="helper-message mt" v-if="loginHelperMessage">{{ loginHelperMessage }}</div>
  </section>
</template>

<script>
export default {
  data (){
    return {
      email: "",
      password: "",
      needsRegister: false,
      headerText: "",
      loginHelperMessage: "",
      regEx: /\S+@\S+\.\S+/
    }
  },
  methods: {
    checkEmailExists(){
      console.log("check me pls")
    },
    /*
    isEmailValid(){
      return (!this.email) ? "" : (this.regEx.test(this.email)) ? "valid-input" : "invalid-input";
    },*/
    emailInputClass(){
      return (!this.email) ? "" : (this.isEmailValid()) ? "valid-input" : "invalid-input"
    },
    isEmailValid(){
      return (this.regEx.test(this.email)) ? true : false;
    },
    handleLogin(){
      this.loginHelperMessage = "";
      !this.email ? this.loginHelperMessage = "Enter your email plz" : this.checkEmailExists();

      /*
      if (!this.email || !this.password){
        this.loginHelperMessage = "Please fill out the form";
      }
      else {
        console.log("do something...")
      }*/
    }
  },
  mounted(){
    this.headerText = "Enter your email";
  }
}
</script>

<style lang="css">

  .authentication-form {
    text-align: center;
    margin-top: 64px;
  }

  .helper-message {
    width: calc(100% - 16px);
    background: rgba(var(--r), var(--g), var(--b), 0.1);
    padding: 8px;
    font-weight: 700;
  }




</style>
