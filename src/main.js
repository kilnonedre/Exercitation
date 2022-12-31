import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routers';
import store from './store/store';

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString()
})

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')