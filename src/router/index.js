import { createRouter,createWebHashHistory } from "vue-router";
import ChatWindow from '../components/ChatWindow.vue';

const routes=[
    {path:'/',component:ChatWindow},
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;