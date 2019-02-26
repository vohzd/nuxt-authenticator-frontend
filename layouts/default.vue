<template lang="html">
  <div>
    <header-bar />
    <nuxt />
  </div>
</template>

<script>
  import HeaderBar from "~/components/Header.vue";
  export default {
    components: {
      "header-bar": HeaderBar
    }
  }
</script>

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

  input {
    width: 100%;
  }

  input, button {
    padding: 8px;
    border: 2px solid rgba(var(--r), var(--g), var(--b), 0.25);
    font-family: monospace;
    background: none;
    transition: 0.7s all;
    border-radius: 4px;
  }

  .row {
    width: 100%;
  }


  .container {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 25%;
    margin-left: 25%;
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
