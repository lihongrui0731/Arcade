import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
import PrimeVue from 'primevue/config'

import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';


const app = createApp(App)
app.use(PrimeVue)
app.component('TabMenu', TabMenu)
app.component('InputText', InputText)
app.component('Button', Button)


createApp(App).use(store).use(router).mount('#app')