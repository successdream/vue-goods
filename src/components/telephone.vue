<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
     
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <div v-if="flag">hello  world</div>
  </div>
</template>

<style>

</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
         actions: [],
         flag:false
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
         this.flag=true;
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      console.log(1)
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
