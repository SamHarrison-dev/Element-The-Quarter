import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Faq from '../views/FaqView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/faq',
        name: 'Frequently Asked Questions',
        component: Faq
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound
    }]
})

export default router
