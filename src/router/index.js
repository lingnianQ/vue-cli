import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeView,
        children: [
            {
                path: '/sys-admin/temp/brand/add-new',
                component: () => import('@/components/BrandAdd')
            },
            {
                path: '/sys-admin/temp/album/add-new',
                component: () => import('@/components/PhotoAdd')
            },
            {
                path: '/sys-admin/temp/album/list',
                component: () => import('../views/sys-admin/temp/AlbumListView.vue')
            },
            {
                path: '/sys-admin/temp/brand/list',
                component: () => import('../views/sys-admin/temp/BrandListView')
            },
        ]

    },
    {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    },
    {
        path: '/admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
