import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue';
import SlotUseModal from "@/views/SlotUseModal.vue";
import OptionCalculator from "@/views/OptionCalculator.vue";
import CompositionCalculator from "@/views/CompositionCalculator.vue";

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
    },
    {
        path: '/optionCalculator',
        name: 'optionCalculator',
        component: OptionCalculator
    },
    {
        path: '/compositionCalculator',
        name: 'compositionCalculator',
        component: CompositionCalculator
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
