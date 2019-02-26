<template lang="html">
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
</template>

<script>

import { mapActions, mapGetters } from "vuex";

import AuthenticationForm from "~/components/AuthenticationForm.vue";

export default {
  components: {
    "authentication-form": AuthenticationForm
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


</style>
