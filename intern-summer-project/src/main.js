import './assets/main.css'
import './assets/global.css'
import { VueAwesomePaginate } from 'vue-awesome-paginate'
import "vue-awesome-paginate/dist/style.css"

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(VueAwesomePaginate).mount('#app')
