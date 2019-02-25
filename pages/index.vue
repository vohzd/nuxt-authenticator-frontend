<template lang="html">
  <section>
    <header class="header">
      <h1>Authenticator</h1>
      <authentication-status />
    </header>
    <main>
      <div v-if="!isLoggedIn">
        <authentication-form />
      </div>
      <div v-if="isLoggedIn">
        <h4>Congrats... you are logged in!!</h4>
      </div>
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
      "isLoggedIn"
    ])
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

</style>
