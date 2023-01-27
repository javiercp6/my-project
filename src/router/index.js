import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: "/",
        component: () => import("../components/Nabvar.vue"),
        children: [{ path: "", component: () => import("../views/Home.vue") },
         { path: "producto", component: () => import("../views/Product.vue") },
         { path: "carrito", component: () => import("../views/CarPage.vue") }
        ],
    },
  ]
})

export default router