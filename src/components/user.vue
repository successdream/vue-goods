<template>
     <div id="user">
         <div class="user">
             <div class="left">
                  <div>
                    <router-link to="/user/add">增加用户</router-link>
                  </div>
                  <div>
                    <router-link to="/user/reduce">减少用户</router-link>
                  </div>
             </div>
             <div class="right">
                   <router-view></router-view>
             </div>
         </div>
     </div>
</template>
<style  scoped>
   /* .user{
     display: flex;
     .left{
       width:100px;
       height:100%;
     }
     .right{
       flex:1;
     }
   } */
</style>
<script>
  
</script>