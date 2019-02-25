import state from "./state.js";

export default {
  SET_IS_LOGGED_IN(state, bool){
    state.isLoggedIn = bool;
  }
}
