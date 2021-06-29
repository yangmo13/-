import { createRouter, createWebHistory } from "vue-router";


const routes = [
  
  {
    //登录页面
    path:"/login",
    name:'login',
    component:()=>import("@/views/login.vue")
  },
  {
    //注册页面
    path:"/register",
    name:"register",
    component:()=>import("@/views/register.vue")
  },{
    //扫码页面
    path:"/code",
    name:"code",
    component:()=>import("@/views/code.vue")
  },
  {
    //地址选择
    path:"/address",
    name:"address",
    component:()=>import('@/views/address.vue')
  },
  {
    //添加成功
    path:"/",
    name:'addSuccess',
    component:()=>import('@/views/addSuccess.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
