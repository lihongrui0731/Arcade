import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
import PrimeVue from 'primevue/config'

import config from './config'
import axios from 'axios'
let base = config.vars.backendBase
if (!base.endsWith('/')) base += '/'
axios.defaults.baseURL = base

import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


// import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import '@mdi/font/css/materialdesignicons.css';

import 'vue-cesium/dist/index.css'
import VueCesium from 'vue-cesium'


const app = createApp(App)
app.use(PrimeVue)
app.component('TabMenu', TabMenu)
app.component('InputText', InputText)
app.component('Button', Button)
app.use(VueCesium, {
    cesiumPath: './Cesium/Cesium.js',
})

createApp(App).use(store).use(router).mount('#app')
