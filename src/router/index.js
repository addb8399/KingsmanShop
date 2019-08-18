import Vue from 'vue';
import VueRouter from 'vue-router';
// import frontBkgTop from "@/components/frontEnd/frontBkgTop";
import allProducts from "@/components/frontEnd/allProducts";
import oneProduct from "@/components/frontEnd/oneProduct";
import checkPage from "@/components/frontEnd/checkPage";
import checkOut from "@/components/frontEnd/checkOut";

import login from "@/components/backEnd/Login";
import dashboard from "@/components/backEnd/dashboard";
import productList from "@/components/backEnd/productList";
import orderList from "@/components/backEnd/orderList";
import coupons from "@/components/backEnd/coupons";
import testOrder from "@/components/backEnd/testOrder";

Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            path:"*",
            redirect :"products",
        },
        // {
        //     name: 'home',
        //     path: '/',
        //     component: frontBkgTop,
        // },
        {
            name: 'products',
            path: '/products',
            component: allProducts,
        },
        {
            name: 'oneProduct',
            path: '/product/:productId',
            component: oneProduct,
        },
        {
            name: 'login',
            path: '/login',
            component: login,
        },
        {
            // name: 'dashboard',
            path: '/admin',
            component: dashboard,
            
            children:[
                {
                    name:'productList',
                    path:'productList',
                    component:productList,
                    meta: { requiresAuth: true },
                },
                {
                    name:'orderList',
                    path:'orderList',
                    component:orderList,
                    meta: { requiresAuth: true },
                },
                {
                    name:'coupons',
                    path:'coupons',
                    component:coupons,
                    meta: { requiresAuth: true },
                },
                {
                    name:'testOrder',
                    path:'testOrder',
                    component:testOrder,
                    meta: { requiresAuth: true },
                },
            ]
        },
        {
            name: 'checkPage',
            path: '/checkPage',
            component: checkPage,
        },
        {
            name: 'checkOut',
            path: '/checkOut/:orderId',
            component: checkOut,
        },
    ]
});