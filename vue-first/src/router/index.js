import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue';
import SlotUseModal from "@/views/SlotUseModal.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path: '/nested',
        name: 'NestedComponent',
        component: NestedComponent
    },
    {
        path: '/slot',
        name: 'SlotUseModal',
        component: SlotUseModal
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
