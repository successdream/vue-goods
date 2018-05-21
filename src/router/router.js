
import Vue from 'vue'
import Home from "@/components/Home";
import News from "@/components/News";
import Detail from "@/components/detail";
import User from "@/components/user";

  import UserAdd from "@/components/user/user-add";
  import UserReduce from "@/components/user/user-reduce";
import Telephone from "@/components/telephone";
import Vuex from "@/components/vuex";
import VuexTest from "@/components/vuex-text";

import Lianxi from "@/components/lianxi";
import Jianli from "@/components/jianli";
import Myself from "@/components/myself";



import VueRouter from "vue-router";
Vue.use(VueRouter);


var routes=[
  
  {name:"lianxi",path:"/lianxi",component:Lianxi},
  {name:"jianli",path:"/jianli",component:Jianli},
  {name:"myself",path:"/myself",component:Myself},




  {name:"home",path:"/home",component:Home},
  {name:"news",path:"/news",component:News},
  {name:"detail",path:"/detail",component:Detail},
  {name:"telephone",path:"/telephone",component:Telephone},
  {name:"Vuex",path:"/vuex",component:Vuex},
  {name:"VuexTest",path:"/vuetest",component:VuexTest},
  
  
  {name:"user",path:"/user",component:User,
       children:[
         {path:"add",component:UserAdd},
         {path:"reduce",component:UserReduce}
      ]
   },
  
  
  {path:"*",redirect:"/news"}
  
]
var router=new VueRouter({
      mode:'history',
      routes
})

export default router;
