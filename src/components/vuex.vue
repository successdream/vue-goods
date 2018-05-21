<template>
   <div>
     <h1>我是vueX组件===={{this.$store.state.count}}===={{this.$store.getters.computed}}</h1>
     <button @click="addCount">调用mountians增加count</button>
   </div>
</template>
<style>

</style>
<script>
import store from '../vuex/store';

    export default {
      data(){
        return {

        }
      },
      store,
      mounted(){

      },
      methods:{
         addCount(){
           this.$store.commit("addCount");
         }
      }
    }
</script>