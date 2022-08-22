import axios from "axios";
import VueAxios from "vue-axios";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAxios, axios);
  // const header = {
  //   "Content-Type": "application/json",
  // };
  // const api = axios.create({
  //   headers: header,
  // });
  // api.defaults.withCredentials = true;
  // api.defaults.timeout = 30000;
  // api.setBaseURL(process.env.ODOO_URL);
  // nuxtApp.provide("api", nuxtApp.config.globalProperties.axios);
});
