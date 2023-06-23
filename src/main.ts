import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'highlight.js/styles/github.css'
import VueShowdown from 'vue-showdown';

createApp(App).use(VueShowdown).mount('#app')
