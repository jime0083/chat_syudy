import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';


const app=createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.use(vuetify);


