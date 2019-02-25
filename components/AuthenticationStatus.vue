<template lang="html">
  <span class="authentication-status">Logged In: {{ isLoggedIn }}</span>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "isLoggedIn"
    ])
  }
}
</script>

<style lang="css">

  .authentication-status {
    position: absolute;
    right: 0;
    margin-right: 8px;
    line-height: 56px;
  }

</style>
