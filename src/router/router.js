import { createRouter, createWebHistory } from 'vue-router';
import TokensPageLvlOne from '@/pages/TokensPageLvlOne.vue'
import TokensPageLvlTwo from "@/pages/TokensPageLvlTwo.vue";
export const routes = [
    {
        path: '/',
        name: 'index',
        component: TokensPageLvlOne
    },{
        path: '/rewards_level_two',
        name: 'rewards',
        component: TokensPageLvlTwo
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash, // Target the element matching the hash
                behavior: 'smooth', // Enable smooth scrolling
            };
        } else if (savedPosition) {
            return savedPosition; // Restore saved scroll position on back/forward
        } else {
            return { top: 0 }; // Scroll to top by default
        }
    },
    routes,

});

export default router;
