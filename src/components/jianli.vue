<template>
   <div>
     <Header :val="title"></Header> 
     <ul>
       <li>
         <div>
           <div>公司</div>
           <div>时间</div>
         </div>
         <p>内容</p>
       </li>
     </ul>
   </div>
</template>
<style>

</style>
<script>
  import Header from "./Header";
   export default{
     data(){
       return {
          title:"简历"
       }
     },
     components:{
         Header
      },

   }
</script>