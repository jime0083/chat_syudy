import { createRouter,createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import ChatView from '../views/ChatView.vue'

const routes=[
    {path:'/',component:HomeView},
    {path:'/chat',component:ChatView}
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;