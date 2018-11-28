import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Stations from '@/components/Funceme/Stations'
import Station from '@/components/Funceme/Station'

import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/estacoes', name: 'stations', component: Stations },
    { path: '/estacao/:id', name: 'station', component: Station },
    // auth routes
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp }
  ]
})
