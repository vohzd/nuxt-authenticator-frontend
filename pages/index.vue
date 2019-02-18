<template lang="html">
  <section>
    <header class="header">
      <h1>Authenticator</h1>
      <span class="status">Logged In: {{ isLoggedIn }}</span>
    </header>
    <main>
      <div v-if="!isLoggedIn" >
        <authentication-form />
      </div>
    </main>
  </section>
</template>

<script>

import AuthenticationForm from "~/components/AuthenticationForm.vue";

export default {
  components: {
    "authentication-form": AuthenticationForm
  },
  data(){
    return {

      isLoggedIn: false,
    }
  },
  methods: {

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

  .header .status {
    position: absolute;
    right: 0;
    margin-right: 8px;
    line-height: 56px;
  }





</style>
