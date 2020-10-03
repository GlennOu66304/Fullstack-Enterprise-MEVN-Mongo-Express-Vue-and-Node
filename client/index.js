import Vue from 'vue'


import './styles/main.css'


import Router from 'vue-router'

import router from './routes'

import Main from './pages/Main.vue'

import TextInput from '@/client/components/TextInput.vue'

Vue.use(Router)

Vue.component('text-input', TextInput)

const app = new Vue({

    el:'#app',

    router,

    render: h => h(Main)
})