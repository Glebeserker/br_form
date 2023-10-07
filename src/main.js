import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            formData: [
                
            ]
        }
    }
})

createApp(App).mount('#app').use(store)
