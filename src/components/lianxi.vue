<template>
   <div>
     <Header :val="title"></Header> 
   </div>
</template>
<style>

</style>
<script>
  import Header from "./Header";
   export default{
     data(){
       return {
          title:"联系方式"
       }
     },
     components:{
         Header
      },
   }
</script>