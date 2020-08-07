import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "./assets/fonts/aoyagireisyosimo_ttf_2_01.scss";
import "./assets/fonts/PixelMplus10-Regular.subfont.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
