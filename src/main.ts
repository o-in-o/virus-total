import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "reflect-metadata";
import { container, Lifecycle } from "tsyringe";
import { ApiSettingServise } from "@/services/common/api-setting.servise";

Vue.config.productionTip = false;

container.register(
  "AppSettingSrvice",
  { useClass: ApiSettingServise },
  { lifecycle: Lifecycle.Singleton }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
