import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/about.vue'
import Home from '../components/home.vue'
import Products from '../components/products.vue'
import Product from '../components/product.vue'
import Search from '../components/search.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
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
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product
    },
    {
        path: '/search/:concept',
        name: 'search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router