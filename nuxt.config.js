module.exports = {
  modules: [
    "@nuxtjs/axios"
  ],
  axios: {
    baseURL: "/",
    //baseURL: "/blc",
    proxyHeaders: false,
    credentials: true
  }
}
