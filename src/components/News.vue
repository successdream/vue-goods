<template>
   <div>
     <Header :val="title"></Header> 
     <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in list">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis' :class="isShow:"</p>
							<div class="time">
								 <span class="time-val">{{item.time}}</span>
							</div>
						</div>
					</a>
				</li>
			</ul>

   </div>
</template>
<style scoped>
    .time{
			display: flex;
			justify-content: flex-end;

		}   
		.all{
      white-space:	normal;
		}

</style>
 
<script>
	import Header from "./Header";
  import URL from "./tools/URL.js";
	
    export default{
      data(){
        return {
          list:[],
          title:"我是列表页"
        }
      },
       components:{
         Header
			},
			mounted(){
         this.getData()
			},
      methods:{
        getData(){
					var url=`${URL.URL.address}/list.json`
          this.$http.get(url).then(
						function(res){
             this.list=res.body.list
						},function(res){
               console.log(res);
						}
					)
        }
      }
    }
</script>