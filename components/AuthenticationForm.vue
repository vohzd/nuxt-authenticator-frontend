<template lang="html">
  <section class="authentication-form">
    <h2>{{ headerText }}</h2>
    <input type="text" placeholder="email" v-model="email" @keyup.enter="handleLogin" :class="emailInputClass()" />
    <input placeholder="password" v-model="password" @keyup.enter="handleLogin" v-if="needsRegister"/>
    <button @click="handleLogin" :disabled="!isEmailValid()" :class="emailInputClass() "><span v-if="!isLoading">Go</span><span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span></button>
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
      isLoading: false,
      regEx: /\S+@\S+\.\S+/
    }
  },
  methods: {
    checkEmailExists(){
      this.isLoading = true;
      return "should be nothing here for now...";
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
    async handleLogin(){
      let emailExists = await this.checkEmailExists();
      console.log(emailExists);

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
    margin-top: 24px;
  }.lds-ellipsis {
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
