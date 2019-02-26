import state from "./state.js";

export default {
  SET_IS_LOGGED_IN(state, bool){
    state.isLoggedIn = bool;
  },
  SET_HAS_CHECKED_INITIAL_AUTH(state, bool){
    state.hasCheckedInitialAuth = bool;
  }
}
