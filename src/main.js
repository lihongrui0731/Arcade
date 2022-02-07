import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'

import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';


import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
// import 'primevue/resources/primeicons.css'


const app = createApp(App)
app.use(PrimeVue)
app.component('TabMenu', TabMenu,
'InputText', InputText)


createApp(App).use(store).use(router).mount('#app')