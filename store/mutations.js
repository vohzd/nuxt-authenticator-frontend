import state from "./state.js";

export default {
  SET_IS_LOGGED_IN(state, bool){
    console.log("SETTING...");
    console.log(bool);
    state.isLoggedIn = bool;
  }
}
