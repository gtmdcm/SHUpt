/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('edit_profile', require('./components/edit_profile.vue'));

Vue.component('s-nav', require('./components/s-nav.vue'));

Vue.component('s-carousel', require('./components/s-carousel.vue'));

Vue.component('rules', require('./components/rules.vue'));

Vue.component('help', require('./components/help'));

Vue.component('z-main', require('./components/z-main'));

Vue.component('upload_torrent', require('./components/upload_torrent.vue'));

Vue.component('s-status', require('./components/s-status.vue'));

Vue.component('torrent', require('./components/torrent'));

Vue.component('identify_email', require('./components/identify_email.vue'));

//    Vue.component('welcome2join', require('./message/welcome2join'))
Vue.component('renav', require('./recomponents/renav'));

Vue.component('emailerror', require('./recomponents/emailError'));

Vue.component('search', require('./recomponents/search'));

Vue.component('identify_success',require('./recomponents/identify_success.vue'));

Vue.component('identify_failed',require('./recomponents/identify_failed.vue'));


const app = new Vue({
    el: '#app'
});
