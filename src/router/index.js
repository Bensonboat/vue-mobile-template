import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from '@/components/pages/LoginPage/LoginPage'

import IndexContent from '@/components/layouts/IndexContent'

import HomePage from "@/components/pages/HomePage/HomePage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/',
        name: 'IndexContent',
        component: IndexContent,
        children: [
            {
                path: "/home_page",
                name: "HomePage",
                component: HomePage
            },
            {
                path: "/about",
                name: "About",
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import( /* webpackChunkName: "about" */ "../views/About.vue")
            }        
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;