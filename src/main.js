import { createApp } from 'vue'

import './assets/css/style.scss'
import './assets/css/theme1.scss'
import "flag-icons"
import "@splidejs/vue-splide/css"
import "aos/dist/aos.css"

import App from './App.vue'
import router from "./router"

import VueWritter from "vue-writer"
import VueSplide from '@splidejs/vue-splide'
import AOS from "aos"

AOS.init()


createApp(App).use(router).use(VueWritter).use(VueSplide).mount('#app')

