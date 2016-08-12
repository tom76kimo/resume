import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routeMap from './route-map';
import Vuex from 'vuex';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter();

router.map(routeMap);

router.start(App, '#app');
