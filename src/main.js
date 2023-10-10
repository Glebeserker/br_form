import './assets/main.css'

import { createApp } from 'vue'
import store from './store/index.js'
import App from './App.vue'

import "@/assets/scss/styles.scss"

createApp(App).use(store).mount('#app')
