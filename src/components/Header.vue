<template>
    <mt-header :title="title"></mt-header>
</template>
<style scoped>
     
</style>
<script>
   export default{
       data(){
          return{
             title:''
          }
       },
       props:["val"],
       mounted(){
           this.addTitle()
       },
       methods:{
          addTitle(){
            this.title=this.val;
         }
       }
   }
</script>