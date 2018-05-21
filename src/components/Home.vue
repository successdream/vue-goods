<template>
  <div class="abc">
    <!-- <mt-header :title="title"></mt-header> -->
    <Header :val="title"></Header>
   <swiper></swiper> 
    
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="/home">
                          <span class="mui-icon mui-icon-home"></span>
                          <div class="mui-media-body">首页</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="/news">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">列表页</div>
                        </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="/detail">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">详情</div>
                  </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="/jianli">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">简历</div>
                   </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="/myself">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">自我介绍</div>
                  </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="/lianxi">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系方式</div>
                  </a>
                </li>
		        </ul> 
		</div>










     <!-- <Header ref="childComponent"> </Header> 
     <button @click="getChildData">点击获取子组件中的值</button>
     <button @click="getNewsData">向News组件中的值</button>
     <button @click="goNews">点击跳转到news页面</button>
     <button @click="goNewsName">新闻详情页</button> -->

     

  </div>
  
</template>
<style  scoped>
/* 首页 */
.mui-icon-home {
  background-image: url("../assets/img/news.png");
  background-repeat: round;
}
.mui-icon-home:before {
  content: "";
}
/* 列表页 */
.mui-icon-email {
  background-image: url("../assets/img/list.jpg");
  background-repeat: round;
}
.mui-icon-email:before {
  content: "";
}
/* 详情页 */
.mui-icon-chatbubble {
  background-image: url("../assets/img/picShare.png");
  background-repeat: round;
}
.mui-icon-chatbubble:before {
  content: "";
}
/* 简历 */
.mui-icon-location {
  background-image: url("../assets/img/jianli.jpg");
  background-repeat: round;
}
.mui-icon-location:before {
  content: "";
}
/* 自我介绍 */
.mui-icon-search {
  background-image: url("../assets/img/mine.jpg");
  background-repeat: round;
}
.mui-icon-search:before {
  content: "";
}
/* 联系方式 */
.mui-icon-phone {
  background-image: url("../assets/img/link.jpg");
  background-repeat: round;
}
.mui-icon-search:before {
  content: "";
}
.mui-icon {
  width: 45px;
  height: 45px;
}
.mui-media {
  background-color: #fff;
}
</style>
<script>
import Header from "./Header";
//  import brother from "../common/brother";
import swiper from "./tools/swiper";

export default {
  data() {
    return {
      list: [],
      title: "父组件的值",
      alert: "子组件alert父组件的值",
      msg: "我是Home组件中的值",
      title: "我的项目"
    };
  },
  components: {
    Header,
    swiper
  },
  methods: {
    getData() {
      // var that=this;
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api).then(
        function(response) {
          this.list = response.body.result;
        },
        function(err) {
          console.log(err);
        }
      );
    },
    parentMethod() {
      alert("我是Home组件的方法");
    },
    getChildData() {
      alert(this.$refs.childComponent.msg);
    },
    getNewsData() {
      brother.$emit("to-news", this.msg);
    },
    goNews() {
      this.$router.push({ path: "/news" });
    },
    goNewsName() {
      this.$router.push({ name: "detail", params: { id: 495 } });
    }
  },

  mounted() {
    this.getData();
  }
};
</script>