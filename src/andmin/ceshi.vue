<template>
  <div>
    <div style="height:20px"></div>
    <!-- 上传图片 -->
    <input type="file" @change="ufile" />
    <img style="width:100%" :src="img" alt />
    <mt-button @click="upload">上传</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: [],
      img: ""
    };
  },
  methods: {
    ufile(e) {
      this.file = e.target.files[0];
      let _this = this;
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = function(e) {
        _this.img = e.target.result;
      };
    },
    upload() {
         var params = new FormData() ;
         console.log(params)
          params.append("file",this.file);
          var config = {
             headers:{'Content-Type': 'multipart/form-data'}
        };
        this.axios.post("fied/upload/timg",params,config).then(res=>{
            console.log(res)
        })
    }
  },
  created() {
    // // this.axios.get("user/chat").then(res=>{
    //     console.log(res)
    // })
  }
};
</script>
<style scoped>
</style>