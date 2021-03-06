import Vue from 'vue'
import App from './App'
// import VueTaber from '../vue-tabpanel.js'
import VueTaber from '../src/index.js'
import '../vue-tabpanel.css'
import tabs from './tabs.js'

const vueTaber = new VueTaber({
    tabs,
    persist: false
})

vueTaber.beforeCreateEach((tab, next) => {
    if (tab.name === 'setting') {
        next('home')
    } else {
        next()
    }
})

Vue.use(VueTaber)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    taber: vueTaber,
    template: '<App/>',
    components: {
        App
    }
})