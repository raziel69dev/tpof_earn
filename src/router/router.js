import { createRouter, createWebHistory } from 'vue-router';
import TokensPageLvlOne from '@/pages/TokensPageLvlOne.vue'
export const routes = [
    {
        path: '/',
        name: 'index',
        component: TokensPageLvlOne
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from,  savedPosition) {
        return { top: 0, behavior: "smooth"}
    },
    routes,

});

export default router;
