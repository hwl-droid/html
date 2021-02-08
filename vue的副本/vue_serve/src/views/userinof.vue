<template>
  <div class="userinfo">
    <navbar />
    <img src="../assets/bannerTop_new.png" alt="" class="backImg" />
    <user-detail :userInfo="model" />
  </div>
</template>

<script>
import Navbar from "../components/common/Navbar";
import userDetail from "../components/userComponents/userDetail";
export default {
  data() {
    return {
      model: {}
    };
  },
  components: {
    Navbar,
    userDetail
  },
  methods: {
    async userinfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    }
  },
  created() {
    this.userinfoData();
  }
};
</script>

<style lang="less">
.userinfo {
  .backImg {
    height: 90px;
    width: 100%;
  }
}
</style>
