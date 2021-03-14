<template>
  <div>
    <div style="margin-bottom: 10px"><navbar /></div>
    <div class="UploaderFile">
      <van-uploader
        preview-size="100vw"
        class="UploaderImg"
        :after-read="afterRead"
      />
      <edit-banner left="头像">
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img" />
        <img src="../assets/github.svg" alt="" slot="right" v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" >
      <a href="javascript:;" slot="right" @click="BannerClick($event)">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="UID">
      <a slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别">
      <a href="javascript:;" slot="right">{{ model.gender }}</a>
    </edit-banner>
    <edit-banner left="出生日期">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="个性签名" >
      <a href="javascript:;" slot="right" @click="PersonClick($event)">{{ model.user_desc }}</a>
    </edit-banner>
    <p @click="ret($event)">
      <edit-banner class="return" middle='返回空间'>
      </edit-banner>
    </p>
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
    >
      <van-field v-model="text" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textShow"
      title="个性签名"
      show-cancel-button
      @confirm="descClick"
    >
      <van-field v-model="text" autofocus />
    </van-dialog>
  </div>
</template>
<script>
import Navbar from "../components/common/Navbar.vue";
import editBanner from "../components/common/editBanner";
import { Dialog } from "vant";
export default {
  data() {
    return {
      model: {},
      show: false,
      textShow: false,
      text: "",
    };
  },
  components: {
    Navbar,
    editBanner,
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.UserUpData();
    },
    async UserUpData() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      console.log(res);
    },
    ret(){
       this.$router.push("/userinof");
    },
    BannerClick(e){
      console.log(e.target.innerHTML);
      this.text = this.model.name
      this.show = true
    },
    PersonClick(e){
      console.log(e.target.innerHTML);
      this.text = this.model.user_desc
      this.textShow = true
    },
    confirmClick() {
      this.model.name = this.text;
      this.UserUpData();
      this.text = "";
    },
    descClick() {
      this.model.user_desc = this.text;
      this.UserUpData();
      this.text = "";
    }
  },
  created() {
    this.selectUser();
  },
};
</script>

<style lang="less" scoped>
.UploaderFile {
  position: relative;
  overflow: hidden;
  img {
    width: 9.722vw;
    height: 9.722vw;
    border-radius: 50%;
  }
  .UploaderImg {
    position: absolute;
    opacity: 0;
  }
}
.return{
  margin-top: 13.889vw;
}
</style>