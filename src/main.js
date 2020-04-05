import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueApollo from "vue-apollo";
import AuthPlugin from "./plugins/auth";
import apolloProvider from "./library/apolloProvider";

Vue.use(VueApollo);
Vue.use(AuthPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount("#app");
