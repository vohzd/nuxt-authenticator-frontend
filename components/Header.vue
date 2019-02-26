<template>
  <header class="header">
    <h1>Authenticator</h1>
    <authentication-status />
  </header>
</template>

<script>

import AuthenticationStatus from "~/components/AuthenticationStatus.vue";

export default {
  components: {
    "authentication-status": AuthenticationStatus
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
