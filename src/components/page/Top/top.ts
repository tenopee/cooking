import './top.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import Top from './Top.vue'
// import router from './router'

const topPage = createApp(Top)

// app.use(createPinia())
// topPage.use(router)

topPage.mount('#app')
