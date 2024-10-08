// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importar el store
import router from './router';

const app = createApp(App);

app.use(router);

// Inyectar el store en la instancia Vue
app.use(store);

app.mount('#app');



