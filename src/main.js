import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routeMap from './route-map';

/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter();

router.map(routeMap);

router.start(App, '#app');
