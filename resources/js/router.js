import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
           beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
           }
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})

export default router