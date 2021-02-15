import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from './firebase'


//App.config.productionTip = false

auth.onAuthStateChanged(() => {
    createApp(App).use(store).use(router).mount('#app')
})