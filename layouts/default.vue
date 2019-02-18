<template lang="html">
  <div>
    <nuxt />
  </div>
</template>


<style lang="css">

  :root {
    --r: 89;
    --g: 172;
    --b: 199;
    --invalid: #FF694E;
    --valid: #3BC068;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: monospace;
  }

  .mt {
    margin-top: 8px;
  }

  .mb {
    margin-bottom: 8px;
  }

  input, button {
    padding: 8px;
    border: 2px solid rgba(var(--r), var(--g), var(--b), 0.25);
    font-family: monospace;
    background: none;
    transition: 0.7s all;
    border-radius: 4px;
  }

  button:disabled {
    opacity: 0.25;
  }

  input:hover, input:focus, button:hover {
    background: rgba(var(--r), var(--g), var(--b), 0.06);
    cursor: pointer;
  }

  .invalid-input {
    border: 2px solid var(--invalid);
  }

  .valid-input {
    border: 2px solid var(--valid);
  }



</style>
