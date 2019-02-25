export default {
  setIsLoggedIn({ commit }, bool){
    console.log("called????")
    commit("SET_IS_LOGGED_IN", bool);
  }
}
