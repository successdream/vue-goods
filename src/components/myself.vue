<template>
   <div>
    <Header :val="title"></Header>  
     <div>{{mineData.name}}</div>
   </div>
</template>
<style>
  .myself{
    background-color:#26a2ff;
    color:#fff;
    height:40px;
    line-height: 40px;
  }
</style>
<script>
  import mine from "../json/mine.json";
  import Header from "./Header";
   export default {
      data(){
        return {
          mineData:{},
          title:"自我介绍"
        }
      },
      mounted(){
       this.addCount()
       this.getData()
      },
      methods:{
         addCount(){
           this.mineData=mine;
         },
         getData(){
           this.$http.get('../../static/test.json').then(function(res){
                 console.log(res);
           },function(res){
                 console.log(res);
           })
         }
      },
      components:{
        Header
      }
    }
</script>

