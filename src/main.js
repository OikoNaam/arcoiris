import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
