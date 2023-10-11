/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
// import './assets/main.css'

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';


import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(PrimeVue);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('PasswordInput', Password);

app.use(pinia)
app.use(router)

app.mount('#app')
