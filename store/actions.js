export default {
  async checkAuthState({ dispatch }){
    dispatch("setHasCheckedInitialAuth", false);
    try {
      let req = await this.$axios.get(`http://localhost:1337/checkAuthState`, { withCredentials: true });
      if (req.status === 200){
        dispatch("setIsLoggedIn", true);
      }
    }
    catch (e){
      if (e.response.status === 401){
        dispatch("setIsLoggedIn", false);
      }
    }
  },
  async logout({ commit, dispatch }){
    try {
      let req = await this.$axios.get(`http://localhost:1337/logout`, { withCredentials: true });
      if (req.status === 200){
        dispatch("checkAuthState");
      }
    }
    catch (e){
      console.log(e);
    }
  },
  async sendEmail({ commit, dispatch }, email){
    console.log("pls send the email");
    console.log(email);
    let req = await this.$axios.post(`http://localhost:1337/email/send`, { email });
    console.log(req);
  },
  setIsLoggedIn({ commit, dispatch }, bool){
    commit("SET_IS_LOGGED_IN", bool);
    dispatch("setHasCheckedInitialAuth", true);
  },
  setHasCheckedInitialAuth({ commit }, bool){
    commit("SET_HAS_CHECKED_INITIAL_AUTH", bool);
  },

}
