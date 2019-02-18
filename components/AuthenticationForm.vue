<template lang="html">
  <section class="authentication-form">
    <h2>{{ headerText }}</h2>
    <input class="mt" type="text" placeholder="email" v-model="email" @keyup.enter.prevent="handleLogin" :class="generateFormValidationClass()" />
    <input class="mt" type="password" placeholder="password" v-model="password" @keyup.enter.prevent="handleLogin" v-if="needsRegister"/>
    <button class="mt" @click="handleLogin" :disabled="!isFormValid()" :class="generateFormValidationClass() "><span v-if="!isLoading">Go</span><span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span></button>
  </section>
</template>

<script>
export default {
  data (){
    return {
      email: "",
      password: "",
      needsRegister: false,
      headerText: "Enter your email",
      isLoading: false,
      regEx: /\S+@\S+\.\S+/
    }
  },
  methods: {
    async checkEmailExists(){
      this.isLoading = true;
      let res = await this.$axios.get(`http://localhost:1337/user/${this.email}/`);
      this.isLoading = false;
      return res.data.userExists;
    },
    generateFormValidationClass(){
      return (!this.email) ? "" : (this.isFormValid()) ? "valid-input" : "invalid-input"
    },
    isFormValid(){
      return this.needsRegister ? ((this.regEx.test(this.email) && this.password.length) ? true : false) : (this.regEx.test(this.email)) ? true : false;
    },
    async handleLogin(){
      if (await this.checkEmailExists){
        this.needsRegister = true;
        this.headerText = "Please register for an account."
      }
      else {
        console.log("does exist exist")
      }

      /*
      await this.checkEmailExists() ?
      this.needsRegister = !
      console.log(this.needsRegister);*/

      //emailExists ? console.log("show welcome back") : console.log("show password");

      /*
      if (!this.email || !this.password){
        this.loginHelperMessage = "Please fill out the form";
      }
      else {
        console.log("do something...")
      }*/
    },
    registerReset(){
      this.needsRegister = false;
      this.headerText = "Enter your email";
      this.password = "";
    }
  },
  watch: {
    email(){
      this.registerReset();
    }
  }
}
</script>

<style lang="css">

.authentication-form {
    text-align: center;
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
}

  .authentication-form input {
    width: 100%;
  }

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 10px;
}
.lds-ellipsis div {
    position: absolute;
    top: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(0,0,0,0.15);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
   }
    100% {
        transform: scale(1);
   }
}
@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
   }
    100% {
        transform: scale(0);
   }
}
@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
   }
    100% {
        transform: translate(19px, 0);
   }
}



</style>
