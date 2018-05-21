<template>
   <div class="top">
     <div class="top-container">
        <p class="title">TODOLIST</p>
        <input type="text" v-model="inputValue" @keypress="enter($event)">
     </div>
     <hr>
     <hr>
     <div class="">
          <div class="complete">搜索事件</div>
          <div v-for="(item,k) in list" v-if="!item.checked">
              <input type="checkbox" v-model="item.checked" @change="changeNum">
              <div>{{item.title}}====<button @click="deleteNum(k)">删除</button></div>
          </div>
     </div>
     <br>
     <br>
     <br>
     <hr>
     <div>
       <div v-for="(item,k) in list" v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="changeNum">
           <div>{{item.title}}====<button @click="deleteNum(k)">删除</button></div>
       </div>
     </div>
   
   </div>
</template>
<script>
import local from '../common/localstorage'

  export default{
    data(){
      return {
        inputValue:"",
        list:[]
        
      }
    },
    methods:{
      enter(e){
        
        if(e.keyCode!=13){
          return;
        }
       this.list.push({title:this.inputValue,checked:false});
      //  localStorage.setItem("abc",JSON.stringify(this.list));
      local.set("abc",JSON.stringify(this.list));
      },
      deleteNum(k){
         this.list.splice(k,1);
         localStorage.setItem("abc",JSON.stringify(this.list));
          // local.set("abc",JSON.stringify(this.list));
      },
      changeNum(){
        localStorage.setItem("abc",JSON.stringify(this.list));
        //  local.set("abc",JSON.stringify(this.list));
      }
    },
    mounted(){
        var list=JSON.parse(localStorage.getItem("abc"));
        // var list=JSON.parse(local.get("abc"));
        
        if(list){
           this.list=list;
        }
    }
    
}
</script>
<style>
 .top{
   background-color:#ccc;
   width:100%;
 }
 .top-container{
     margin: 0 auto;
     width:700px;
  
 }
   .title{
       display: inline-block;
       color:red;
    }

</style>
