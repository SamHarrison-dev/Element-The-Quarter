import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Studio from '../views/StudioView.vue'
import Cluster from '../views/ClusterView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/studio',
        name: 'Studio',
        component: Studio
    },
    {
        path: '/cluster',
        name: 'Cluster',
        component: Cluster
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound
    }]
})

export default router
