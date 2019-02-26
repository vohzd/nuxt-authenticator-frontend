<template lang="html">
  <section>
    <header class="header">
      <h1>Authenticator</h1>
      <authentication-status />
    </header>
    <main class="container">
      <span v-if="!hasCheckedInitialAuth">
        Working...
      </span>
      <span v-if="hasCheckedInitialAuth">
        <span v-if="!isLoggedIn">
          <authentication-form />
        </span>
        <span v-if="isLoggedIn">
          <h4>Congrats... you are logged in!!</h4>
          <button @click="logout">Log out</button>
        </span>
      </span>
    </main>
  </section>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

import AuthenticationForm from "~/components/AuthenticationForm.vue";
import AuthenticationStatus from "~/components/AuthenticationStatus.vue";

export default {
  components: {
    "authentication-form": AuthenticationForm,
    "authentication-status": AuthenticationStatus
  },
  computed: {
    ...mapGetters([
      "isLoggedIn",
      "hasCheckedInitialAuth"
    ])
  },
  methods: {
    ...mapActions([
      "checkAuthState",
      "logout"
    ])
  },
  mounted(){
    this.checkAuthState()
  }
}
</script>

<style lang="css">


  .header {
    display: flex;
    background: rgba(var(--r), var(--g), var(--b), 0.1);
    width: calc(100% - 16px);
    padding: 8px;
    height: 56px;
  }

  .container {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 25%;
    margin-left: 25%;
  }

</style>
